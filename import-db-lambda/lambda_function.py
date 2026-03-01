import gc
import json
import math
import os
import resource
import sqlite3
from io import StringIO

import boto3
import pandas as pd
import paramiko


def my_print(msg):
    usage = resource.getrusage(resource.RUSAGE_SELF)
    memory_mb = usage.ru_maxrss / 1024  # convert KB to MB
    print(f"{memory_mb:.2f} MB - {msg}")


def lambda_handler(event, context):
    # url = "https://www.worldcubeassociation.org/export/results/v2/tsv"

    # # If url contains .sql, replace with .tsv
    # url = url.replace(".sql", ".tsv")

    # my_print("Download")
    # urllib.request.urlretrieve(url, "/tmp/WCA_export.zip")

    # if os.path.exists("/tmp/WCA_export"):
    #     shutil.rmtree("/tmp/WCA_export")

    # my_print("Unzip")
    # shutil.unpack_archive("/tmp/WCA_export.zip", "/tmp/WCA_export")

    # my_print("Rename")
    # for filename in os.listdir("/tmp/WCA_export"):
    #     # Remove WCA_export_ from the filename
    #     new_name = filename.replace("WCA_export_", "")
    #     os.rename(f"/tmp/WCA_export/{filename}", f"/tmp/WCA_export/{new_name}")

    # my_print("Remove unnecessary files")

    # def remove_if_exists(path):
    #     if os.path.exists(path):
    #         os.remove(path)

    # remove_if_exists("/tmp/WCA_export/championships.tsv")
    # remove_if_exists("/tmp/WCA_export/eligible_country_iso2s_for_championship.tsv")
    # remove_if_exists("/tmp/WCA_export/formats.tsv")
    # remove_if_exists("/tmp/WCA_export/round_types.tsv")
    # remove_if_exists("/tmp/WCA_export/scrambles.tsv")

    # # Legacy export names
    # remove_if_exists("/tmp/WCA_export/Formats.tsv")
    # remove_if_exists("/tmp/WCA_export/RoundTypes.tsv")
    # remove_if_exists("/tmp/WCA_export/Scrambles.tsv")

    export_dir = "/tmp/WCA_export"

    filenames = os.listdir(export_dir)
    filenames = [f for f in filenames if f.endswith(".tsv")]

    def normalize_tablename(name):
        lower = name.lower()
        legacy_map = {
            "rankssingle": "ranks_single",
            "ranksaverage": "ranks_average",
            "roundtypes": "round_types",
        }
        return legacy_map.get(lower, lower)

    dfs = {}

    def normalize_columns(tablename, df):
        # Convert snake_case export columns to existing camelCase expectations
        if tablename in ["ranks_single", "ranks_average"]:
            df = df.rename(
                columns={
                    "event_id": "eventId",
                    "person_id": "personId",
                    "country_id": "countryId",
                    "continent_id": "continentId",
                    "world_rank": "worldRank",
                    "continent_rank": "continentRank",
                    "country_rank": "countryRank",
                }
            )
        elif tablename == "results":
            df = df.rename(
                columns={
                    "competition_id": "competitionId",
                    "round_type_id": "roundTypeId",
                    "event_id": "eventId",
                    "person_id": "personId",
                    "person_country_id": "personCountryId",
                    "person_name": "personName",
                    "format_id": "formatId",
                    "regional_single_record": "regionalSingleRecord",
                    "regional_average_record": "regionalAverageRecord",
                }
            )
        elif tablename == "persons":
            df = df.rename(
                columns={
                    "country_id": "countryId",
                    "continent_id": "continentId",
                }
            )
        elif tablename == "countries":
            df = df.rename(columns={"continent_id": "continentId"})
        return df

    for filename in filenames:
        tablename = normalize_tablename(filename.split(".")[0])

        # Optimize memory by skipping unnecessary columns entirely during load
        cols_to_drop = []
        column_dtypes = None
        if tablename == "results":
            cols_to_drop = [
                "personName",
                "formatId",
                "personCountryId",
                "person_name",
                "format_id",
                "person_country_id",
                "value1",
                "value2",
                "value3",
                "value4",
                "value5",
            ]

        # Integers will be int64 by default, and we'll save memory by downcasting
        if tablename == "result_attempts":
            column_dtypes = {
                "value": "int32",
                "attempt_number": "int8",
                "result_id": "int32",
            }

        df = pd.read_csv(
            f"{export_dir}/{filename}",
            delimiter="\t",
            usecols=lambda c: c not in cols_to_drop,
            dtype=column_dtypes,
        )
        dfs[tablename] = normalize_columns(tablename, df)
        my_print(filename)

    # Normalize persons columns for WCA export v2
    if "id" in dfs["persons"].columns and "wca_id" not in dfs["persons"].columns:
        dfs["persons"] = dfs["persons"].rename(columns={"id": "wca_id"})
    if "subid" in dfs["persons"].columns and "sub_id" not in dfs["persons"].columns:
        dfs["persons"] = dfs["persons"].rename(columns={"subid": "sub_id"})

    dfs["persons"] = dfs["persons"].drop(columns=["sub_id"], errors="ignore")

    my_print("Cast event ids to string")
    dfs["events"].id = dfs["events"].id.astype(str)
    dfs["ranks_single"].eventId = dfs["ranks_single"].eventId.astype(str)
    dfs["ranks_average"].eventId = dfs["ranks_average"].eventId.astype(str)

    my_print("Handle duplicate persons")

    # If a person has moved countries, then they could have multiple entries
    dfs["persons"].drop_duplicates("wca_id", inplace=True)

    my_print("Populate country ids")
    country_ids = dfs["persons"][["wca_id", "countryId"]]

    dfs["ranks_single"] = (
        dfs["ranks_single"]
        .merge(country_ids, left_on="personId", right_on="wca_id")
        .drop("wca_id", axis=1)
    )
    dfs["ranks_average"] = (
        dfs["ranks_average"]
        .merge(country_ids, left_on="personId", right_on="wca_id")
        .drop("wca_id", axis=1)
    )
    del country_ids
    gc.collect()

    my_print("Populate continent ids")
    continent_ids = dfs["countries"][["id", "continentId"]]

    dfs["ranks_single"] = (
        dfs["ranks_single"]
        .merge(continent_ids, left_on="countryId", right_on="id")
        .drop("id", axis=1)
    )
    dfs["ranks_average"] = (
        dfs["ranks_average"]
        .merge(continent_ids, left_on="countryId", right_on="id")
        .drop("id", axis=1)
    )
    dfs["persons"] = (
        dfs["persons"]
        .merge(
            continent_ids, left_on="countryId", right_on="id", suffixes=("", "_drop")
        )
        .drop("id_drop", axis=1, errors="ignore")
    )
    del continent_ids
    gc.collect()

    my_print("Populate names")
    names = dfs["persons"][["wca_id", "name"]]

    dfs["ranks_single"] = (
        dfs["ranks_single"]
        .merge(names, left_on="personId", right_on="wca_id")
        .drop("wca_id", axis=1)
    )
    dfs["ranks_average"] = (
        dfs["ranks_average"]
        .merge(names, left_on="personId", right_on="wca_id")
        .drop("wca_id", axis=1)
    )
    del names
    gc.collect()

    my_print("Calculate max ranks")
    single_world_maxes = dfs["ranks_single"].groupby("eventId").max()["worldRank"]
    average_world_maxes = dfs["ranks_average"].groupby("eventId").max()["worldRank"]

    single_continent_maxes = (
        dfs["ranks_single"].groupby(["continentId", "eventId"]).max()["continentRank"]
    )
    average_continent_maxes = (
        dfs["ranks_average"].groupby(["continentId", "eventId"]).max()["continentRank"]
    )

    single_country_maxes = (
        dfs["ranks_single"].groupby(["countryId", "eventId"]).max()["countryRank"]
    )
    average_country_maxes = (
        dfs["ranks_average"].groupby(["countryId", "eventId"]).max()["countryRank"]
    )

    # People who switched nationality may have rank of 0 for continentRank and countryRank.
    # Set these values to the max possible value for that event.

    def fill_zero_ranks(df, continent_maxes, country_maxes):
        continent_lookup = (
            df[["continentId", "eventId"]].apply(tuple, axis=1).map(continent_maxes)
        )
        df.loc[df["continentRank"] == 0, "continentRank"] = continent_lookup[
            df["continentRank"] == 0
        ].values

        country_lookup = (
            df[["countryId", "eventId"]].apply(tuple, axis=1).map(country_maxes)
        )
        df.loc[df["countryRank"] == 0, "countryRank"] = country_lookup[
            df["countryRank"] == 0
        ].values

        return df

    dfs["ranks_single"] = fill_zero_ranks(
        dfs["ranks_single"], single_continent_maxes, single_country_maxes
    )
    dfs["ranks_average"] = fill_zero_ranks(
        dfs["ranks_average"], average_continent_maxes, average_country_maxes
    )

    my_print("There should be very few rows where continentRank or countryRank is 0")
    dfs["ranks_single"][dfs["ranks_single"].countryRank == 0]

    def calculate_sum_of_ranks(
        rank_type, events, world_maxes, continent_maxes, country_maxes
    ):
        events_set = set(events)
        ranks_table = dfs[f"ranks_{rank_type}"]
        ranks_filtered = ranks_table[ranks_table["eventId"].isin(events_set)]

        existing_sor = ranks_filtered.groupby("personId")[
            ["worldRank", "continentRank", "countryRank"]
        ].sum()
        existing_events = ranks_filtered.groupby("personId")["eventId"].apply(set)

        persons_info = dfs["persons"][["wca_id", "countryId", "continentId"]].set_index(
            "wca_id"
        )
        existing_sor = existing_sor.join(persons_info, how="right")
        existing_sor[["worldRank", "continentRank", "countryRank"]] = existing_sor[
            ["worldRank", "continentRank", "countryRank"]
        ].fillna(0)
        existing_events = existing_events.reindex(existing_sor.index)

        world_max_total = sum(world_maxes.get(e, 0) for e in events)

        continent_max_by_event = {}
        for (cid, eid), val in continent_maxes.items():
            if eid in events_set:
                continent_max_by_event.setdefault(cid, {})[eid] = val

        country_max_by_event = {}
        for (cid, eid), val in country_maxes.items():
            if eid in events_set:
                country_max_by_event.setdefault(cid, {})[eid] = val

        continent_total_max = {
            cid: sum(ev.values()) for cid, ev in continent_max_by_event.items()
        }
        country_total_max = {
            cid: sum(ev.values()) for cid, ev in country_max_by_event.items()
        }

        def compute_missing_world(row_events):
            if row_events is None or (isinstance(row_events, float)):
                return world_max_total
            return sum(world_maxes.get(e, 0) for e in events_set - row_events)

        def compute_missing_continent(row):
            row_events = existing_events.get(row.name)
            cid = row["continentId"]
            if row_events is None or (isinstance(row_events, float)):
                return continent_total_max.get(cid, 0)
            cid_maxes = continent_max_by_event.get(cid, {})
            return sum(cid_maxes.get(e, 0) for e in events_set - row_events)

        def compute_missing_country(row):
            row_events = existing_events.get(row.name)
            cid = row["countryId"]
            if row_events is None or (isinstance(row_events, float)):
                return country_total_max.get(cid, 0)
            cid_maxes = country_max_by_event.get(cid, {})
            return sum(cid_maxes.get(e, 0) for e in events_set - row_events)

        existing_sor["worldRank"] += existing_events.map(compute_missing_world).fillna(
            world_max_total
        )
        existing_sor["continentRank"] += existing_sor.apply(
            compute_missing_continent, axis=1
        )
        existing_sor["countryRank"] += existing_sor.apply(
            compute_missing_country, axis=1
        )

        sor = existing_sor[["worldRank", "continentRank", "countryRank"]].reset_index()
        sor = sor.rename(
            columns={
                "wca_id": "personId",
                "worldRank": f"worldSor{rank_type.title()}",
                "continentRank": f"continentSor{rank_type.title()}",
                "countryRank": f"countrySor{rank_type.title()}",
            }
        )
        return sor

    single_events = [
        "222",
        "333",
        "333bf",
        "333fm",
        "333mbf",
        "333oh",
        "444",
        "444bf",
        "555",
        "555bf",
        "666",
        "777",
        "clock",
        "minx",
        "pyram",
        "skewb",
        "sq1",
    ]

    # Same as single_events but no 333mbf
    average_events = [
        "222",
        "333",
        "333bf",
        "333fm",
        "333oh",
        "444",
        "444bf",
        "555",
        "555bf",
        "666",
        "777",
        "clock",
        "minx",
        "pyram",
        "skewb",
        "sq1",
    ]

    my_print("Single sum of ranks")
    single_sor = calculate_sum_of_ranks(
        "single",
        single_events,
        single_world_maxes,
        single_continent_maxes,
        single_country_maxes,
    )
    del single_world_maxes, single_continent_maxes, single_country_maxes
    gc.collect()

    my_print("Average sum of ranks")
    average_sor = calculate_sum_of_ranks(
        "average",
        average_events,
        average_world_maxes,
        average_continent_maxes,
        average_country_maxes,
    )
    del average_world_maxes, average_continent_maxes, average_country_maxes
    gc.collect()

    dfs["persons"] = (
        dfs["persons"]
        .merge(single_sor, left_on="wca_id", right_on="personId")
        .drop("personId", axis=1)
    )
    dfs["persons"] = (
        dfs["persons"]
        .merge(average_sor, left_on="wca_id", right_on="personId")
        .drop("personId", axis=1)
    )
    del single_sor, average_sor
    gc.collect()
    dfs["persons"].head()

    # Get the min rank instead of rank 1, because sometimes rank 1 doesn't exist (idk why)
    best_singles = (
        dfs["ranks_single"]
        .sort_values("worldRank")
        .drop_duplicates("eventId")[["eventId", "best"]]
        .rename(columns={"best": "single"})
    )
    best_averages = (
        dfs["ranks_average"]
        .sort_values("worldRank")
        .drop_duplicates("eventId")[["eventId", "best"]]
        .rename(columns={"best": "average"})
    )

    world_bests = best_singles.merge(best_averages, on="eventId", how="outer")
    world_bests = {
        eventId: (single, average) for eventId, single, average in world_bests.values
    }

    def group_dict(d):
        """
        Example input: {
            ('a', 'b'): 1,
            ('a', 'c'): 2,
        }

        Example output: {
            'a': {
                'b': 1,
                'c': 2,
            },
        }
        """
        output = {}
        for k in d:
            if k[0] not in output:
                output[k[0]] = {}

            output[k[0]][k[1]] = d[k]
        return output

    best_singles = (
        dfs["ranks_single"]
        .sort_values("continentRank")
        .drop_duplicates(["eventId", "continentId"])[["eventId", "best", "continentId"]]
        .rename(columns={"best": "single"})
    )
    best_averages = (
        dfs["ranks_average"]
        .sort_values("continentRank")
        .drop_duplicates(["eventId", "continentId"])[["eventId", "best", "continentId"]]
        .rename(columns={"best": "average"})
    )

    continent_bests = best_singles.merge(
        best_averages, on=["eventId", "continentId"], how="outer"
    ).drop_duplicates()
    continent_bests = {
        (continentId, eventId): (single, average)
        for eventId, single, continentId, average in continent_bests.values
    }
    continent_bests = group_dict(continent_bests)

    best_singles = (
        dfs["ranks_single"]
        .sort_values("countryRank")
        .drop_duplicates(["eventId", "countryId"])[["eventId", "best", "countryId"]]
        .rename(columns={"best": "single"})
    )
    best_averages = (
        dfs["ranks_average"]
        .sort_values("countryRank")
        .drop_duplicates(["eventId", "countryId"])[["eventId", "best", "countryId"]]
        .rename(columns={"best": "average"})
    )

    country_bests = best_singles.merge(
        best_averages, on=["eventId", "countryId"], how="outer"
    ).drop_duplicates()
    country_bests = {
        (continentId, eventId): (single, average)
        for eventId, single, continentId, average in country_bests.values
    }
    country_bests = group_dict(country_bests)

    def build_rank_dict(tablename):
        d = {}
        for row in dfs[tablename][["personId", "eventId", "best"]].values:
            personId, eventId, best = row

            if personId not in d:
                d[personId] = {}

            d[personId][eventId] = best

        # Make sure every person at least has an empty object
        for id in dfs["persons"]["wca_id"]:
            if id not in d:
                d[id] = {}

        return d

    my_print("Build rank dicts")
    single_dict = build_rank_dict("ranks_single")
    average_dict = build_rank_dict("ranks_average")

    def mbldScore(value):
        if not value:
            return 0
        seconds = math.floor(value / 100) % 1e5
        points = 99 - (math.floor(value / 1e7) % 100)
        centiseconds = None if seconds == 99999 else seconds * 100
        proportionOfHourLeft = 1 - centiseconds / 360000
        score = points + proportionOfHourLeft
        return max(score, 0)

    def get_kinch_score(personId, bests, key):
        if key:
            if key in bests:
                bests = bests[key]
            else:
                # This edge case can occur if, for example, a person moves to a new country that has no results.
                # This occurred for wca id 2018YEDD01 who moved to Barbados!
                return 0
        scores = []

        # Handle 333mbf
        single = single_dict[personId].get("333mbf")
        bestSingle, bestAverage = bests["333mbf"] if "333mbf" in bests else (None, None)

        mbldPersonal = mbldScore(single)
        mbldRecord = mbldScore(bestSingle)

        if mbldRecord:
            scores.append(mbldPersonal / mbldRecord * 100)
        else:
            # If nobody has mbld, use 100
            scores.append(0)

        # For these events, use better between single and average
        for eventId in ["333fm", "333bf", "444bf", "555bf"]:
            single = single_dict[personId].get(eventId)
            average = average_dict[personId].get(eventId)
            bestSingle, bestAverage = (
                bests[eventId] if eventId in bests else (None, None)
            )

            if not single and not average:
                scores.append(0)
            elif not bestSingle or not bestAverage:
                # This can happen if a person has multiple countryIds and one of the countries has no result for the event.
                scores.append(100)
            elif not average:
                # If no average, use single
                scores.append(bestSingle / single * 100)
            else:
                # # If there is an average, use the better of the two
                scores.append(
                    max(bestSingle / single * 100, bestAverage / average * 100)
                )

        # For these events, use average
        for eventId in [
            "222",
            "333",
            "333oh",
            "444",
            "555",
            "666",
            "777",
            "clock",
            "minx",
            "pyram",
            "skewb",
            "sq1",
        ]:
            single = single_dict[personId].get(eventId)
            average = average_dict[personId].get(eventId)
            bestSingle, bestAverage = (
                bests[eventId] if eventId in bests else (None, None)
            )

            if not average:
                scores.append(0)
            elif not bestAverage:
                # This can happen if a person has multiple countryIds and one of the countries has no result for the event.
                scores.append(100)
            else:
                scores.append(bestAverage / average * 100)

        avgScore = sum(scores) / len(scores)
        if personId == "2011BANS02":
            my_print(f"scores: {scores}")
            my_print(f"avgScore: {avgScore}")
        return avgScore

    persons = dfs["persons"]

    my_print("World kinch")
    persons["worldKinch"] = persons.apply(
        lambda row: get_kinch_score(row["wca_id"], world_bests, None), axis=1
    )

    my_print("Continent kinch")
    persons["continentKinch"] = persons.apply(
        lambda row: get_kinch_score(row["wca_id"], continent_bests, row["continentId"]),
        axis=1,
    )

    my_print("Country kinch")
    persons["countryKinch"] = persons.apply(
        lambda row: get_kinch_score(row["wca_id"], country_bests, row["countryId"]),
        axis=1,
    )
    del single_dict, average_dict, world_bests, continent_bests, country_bests
    gc.collect()
    persons.head()

    my_print("Populate startDate and endDate")

    # Format is yyyy-mm-dd
    # Pad month and day with zeros
    dfs["competitions"]["startDate"] = dfs["competitions"].apply(
        lambda row: (
            f"{row['year']}-{str(row['month']).zfill(2)}-{str(row['day']).zfill(2)}"
        ),
        axis=1,
    )
    dfs["competitions"]["endDate"] = dfs["competitions"].apply(
        lambda row: (
            f"{row['year']}-{str(row['end_month']).zfill(2)}-{str(row['end_day']).zfill(2)}"
        ),
        axis=1,
    )

    my_print("Get persons in order of rank")
    persons = dfs["ranks_single"].sort_values("worldRank")["personId"].unique()

    my_print("Create miscellaneous")
    with open(f"{export_dir}/metadata.json", "r") as f:
        data = json.loads(f.read())

        dfs["miscellaneous"] = pd.DataFrame(
            {
                "key": ["export_date"],
                "value": [
                    data["export_date"][0:10]
                ],  # Only first 10 chars for yyyy-mm-dd
            }
        )

    def df_to_sqlite(df, table_name):
        conn = sqlite3.connect("/tmp/wca.db")

        try:
            df.to_sql(table_name, conn, if_exists="replace", index=False)
            my_print(f"{table_name}: table created")
        except Exception as e:
            my_print(f"Error: {e}")
        finally:
            conn.close()

    # Remove wca.db
    if os.path.exists("/tmp/wca.db"):
        os.remove("/tmp/wca.db")

    for name in list(dfs.keys()):
        df_to_sqlite(dfs.pop(name), name)
    gc.collect()

    my_print("Create indices")
    conn = sqlite3.connect("/tmp/wca.db")
    c = conn.cursor()

    # TODO: Analyze which of these indices are actually needed
    c.execute("CREATE INDEX idx_persons_wca_id ON persons(id);")
    c.execute("CREATE INDEX idx_persons_countryId ON persons(countryId);")
    c.execute("CREATE INDEX idx_persons_continentId ON persons(continentId);")
    c.execute("CREATE INDEX idx_persons_countryKinch ON persons(countryKinch);")
    c.execute("CREATE INDEX idx_persons_continentKinch ON persons(continentKinch);")
    c.execute("CREATE INDEX idx_persons_worldKinch ON persons(worldKinch);")
    c.execute("CREATE INDEX idx_persons_countrySorSingle ON persons(countrySorSingle);")
    c.execute(
        "CREATE INDEX idx_persons_continentSorSingle ON persons(continentSorSingle);"
    )
    c.execute("CREATE INDEX idx_persons_worldSorSingle ON persons(worldSorSingle);")
    c.execute(
        "CREATE INDEX idx_persons_countrySorAverage ON persons(countrySorAverage);"
    )
    c.execute(
        "CREATE INDEX idx_persons_continentSorAverage ON persons(continentSorAverage);"
    )
    c.execute("CREATE INDEX idx_persons_worldSorAverage ON persons(worldSorAverage);")
    c.execute("CREATE INDEX idx_ranks_single_eventId ON ranks_single(eventId);")
    c.execute("CREATE INDEX idx_ranks_single_personId ON ranks_single(personId);")
    c.execute("CREATE INDEX idx_ranks_single_worldRank ON ranks_single(worldRank);")
    c.execute(
        "CREATE INDEX idx_ranks_single_continentRank ON ranks_single(continentRank);"
    )
    c.execute("CREATE INDEX idx_ranks_single_countryRank ON ranks_single(countryRank);")
    c.execute("CREATE INDEX idx_ranks_average_eventId ON ranks_average(eventId);")
    c.execute("CREATE INDEX idx_ranks_average_personId ON ranks_average(personId);")
    c.execute("CREATE INDEX idx_ranks_average_worldRank ON ranks_average(worldRank);")
    c.execute(
        "CREATE INDEX idx_ranks_average_continentRank ON ranks_average(continentRank);"
    )
    c.execute(
        "CREATE INDEX idx_ranks_average_countryRank ON ranks_average(countryRank);"
    )

    conn.commit()
    conn.close()

    # Get environment variables
    vps_ip = os.environ["IP"]
    vps_user = os.environ["USER"]

    # Get private key from Parameter Store
    ssm_client = boto3.client("ssm")
    response = ssm_client.get_parameter(
        Name="cubingapp-ssh-private-key", WithDecryption=True
    )
    private_key_content = response["Parameter"]["Value"]

    # Create SSH client
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    # Load private key (auto-detect key type)
    private_key_file = StringIO(private_key_content)
    for key_class in (paramiko.Ed25519Key, paramiko.ECDSAKey, paramiko.RSAKey):
        try:
            private_key_file.seek(0)
            private_key = key_class.from_private_key(private_key_file)
            break
        except Exception:
            continue
    else:
        raise ValueError("Unsupported SSH key type")

    # Connect to VPS
    ssh.connect(vps_ip, username=vps_user, pkey=private_key, timeout=10)

    home_dir_stdin, home_dir_stdout, home_dir_stderr = ssh.exec_command("echo $HOME")
    home_dir = home_dir_stdout.read().decode().strip()

    my_print(f"Upload wca.db to VPS at {home_dir}/wca.db")
    sftp = ssh.open_sftp()
    sftp.put("/tmp/wca.db", f"{home_dir}/wca.db")
    sftp.close()

    ssh.close()

    return {"statusCode": 200, "body": "Success!"}
