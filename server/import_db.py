import math
import os
import sqlite3
import sys
import time

if len(sys.argv) < 2:
    print('Get url from https://www.worldcubeassociation.org/export/results')
    exit()

# Get url from first param
url = sys.argv[1]

# If url contains .sql, replace with .tsv
if '.sql' in url:
    url = url.replace('.sql', '.tsv')

# Get folder name from url
folder = url.split('/')[-1]

# If not downloaded already, download the zip file
if not os.path.exists(f'{folder}.zip'):
    os.system(f'wget {url}')

# Remove WCA_export/ if it exists
if os.path.exists('WCA_export'):
    os.system('rm -r WCA_export')

# unzip the folder into a folder called WCA_export
if not os.path.exists('WCA_export'):
    os.system(f'unzip {folder} -d WCA_export')
    os.system(f'rm {folder}')

# Loop through files in WCA_export/
for filename in os.listdir('WCA_export'):
    # Remove WCA_export_ from the filename
    new_name = filename.replace('WCA_export_', '')
    os.rename(f'WCA_export/{filename}', f'WCA_export/{new_name}')

# Remove files that aren't needed for cubingapp
os.remove('WCA_export/championships.tsv')
os.remove('WCA_export/eligible_country_iso2s_for_championship.tsv')
os.remove('WCA_export/Formats.tsv')
os.remove('WCA_export/RoundTypes.tsv')
os.remove('WCA_export/Scrambles.tsv')

filename = 'wca.db'
dirname = 'WCA_export'

# Remove wca.db
if os.path.exists(filename):
    os.remove(filename)

conn = sqlite3.connect('wca.db')
c = conn.cursor()

print('Starting convert tsv to sqlite')
start = time.time()

filenames = os.listdir(dirname)
filenames = [f for f in filenames if f.endswith('.tsv')]

for filename in filenames:
    table_name = filename.split('.')[0]
    print(f'{table_name} - time {time.time() - start:.2f} seconds')

    # Open file
    with open(dirname + '/' + filename, 'r') as f:
        columns = f.readline().strip().split('\t')
        c.execute(f'DROP TABLE IF EXISTS {table_name}')
        c.execute(f'CREATE TABLE {table_name} ({",".join(columns)})')

        values_list = []

        def execute_batch():
            sql_str = f'INSERT INTO {table_name} ({",".join(columns)}) VALUES ({",".join(["?"] * len(columns))})'
            c.executemany(sql_str, values_list)

        for line in f:
            line = line.strip()
            values = line.split('\t')
            # Cast to int if possible
            for i, value in enumerate(values):
                if value.isdigit():
                    values[i] = int(value)
            values_list.append(values)

            # Executing commands in batches helps performance.
            # But making the batch size too large hurts performance.
            if len(values_list) >= 128:
                execute_batch()
                values_list = []

        execute_batch()

print(f'Finished convert tsv to sqlite in {time.time() - start:.2f} seconds')

print('Starting indices and columns creation')
start = time.time()

# Remove unnecessary columns to reduce database size.
# Results is the largest table so this gets the most benefit.
c.execute('ALTER TABLE Results DROP COLUMN personName;')
c.execute('ALTER TABLE Results DROP COLUMN roundTypeId;')
c.execute('ALTER TABLE Results DROP COLUMN pos;')
c.execute('ALTER TABLE Results DROP COLUMN formatId;')
c.execute('ALTER TABLE Results DROP COLUMN value1;')
c.execute('ALTER TABLE Results DROP COLUMN value2;')
c.execute('ALTER TABLE Results DROP COLUMN value3;')
c.execute('ALTER TABLE Results DROP COLUMN value4;')
c.execute('ALTER TABLE Results DROP COLUMN value5;')
c.execute('ALTER TABLE Results DROP COLUMN regionalSingleRecord;')
c.execute('ALTER TABLE Results DROP COLUMN regionalAverageRecord;')
c.execute('ALTER TABLE Results DROP COLUMN personCountryId;')

# VACUUM to reduce size. SQLite doesn't automatically reclaim space after deleting.
conn.commit()
c.execute('VACUUM;')

# These SQL commands create indices and new columns.
# Since the database is read-only, we do a lot of pre-computation to make queries faster.
c.execute('CREATE INDEX idx_Persons_id ON Persons(id);')
c.execute('CREATE INDEX idx_Persons_countryId ON Persons(countryId);')
c.execute('CREATE INDEX idx_RanksSingle_eventId ON RanksSingle(eventId);')
c.execute('CREATE INDEX idx_RanksSingle_personId ON RanksSingle(personId);')
c.execute('CREATE INDEX idx_RanksSingle_worldRank ON RanksSingle(worldRank);')
c.execute('CREATE INDEX idx_RanksSingle_continentRank ON RanksSingle(continentRank);')
c.execute('CREATE INDEX idx_RanksSingle_countryRank ON RanksSingle(countryRank);')
c.execute('CREATE INDEX idx_RanksAverage_eventId ON RanksAverage(eventId);')
c.execute('CREATE INDEX idx_RanksAverage_personId ON RanksAverage(personId);')
c.execute('CREATE INDEX idx_RanksAverage_worldRank ON RanksAverage(worldRank);')
c.execute('CREATE INDEX idx_RanksAverage_continentRank ON RanksAverage(continentRank);')
c.execute('CREATE INDEX idx_RanksAverage_countryRank ON RanksAverage(countryRank);')

# Create and set countryId columns
c.execute('ALTER TABLE RanksSingle ADD COLUMN countryId TEXT;')
c.execute('UPDATE RanksSingle SET countryId = (SELECT countryId FROM Persons WHERE id = RanksSingle.personId);')
c.execute('ALTER TABLE RanksAverage ADD COLUMN countryId TEXT;')
c.execute('UPDATE RanksAverage SET countryId = (SELECT countryId FROM Persons WHERE id = RanksAverage.personId);')

# Create and set continentId columns
c.execute('ALTER TABLE RanksSingle ADD COLUMN continentId TEXT;')
c.execute('UPDATE RanksSingle SET continentId = (SELECT continentId FROM Countries WHERE id = RanksSingle.countryId);')
c.execute('ALTER TABLE RanksAverage ADD COLUMN continentId TEXT;')
c.execute('UPDATE RanksAverage SET continentId = (SELECT continentId FROM Countries WHERE id = RanksAverage.countryId);')
c.execute('ALTER TABLE Persons ADD COLUMN continentId TEXT;')
c.execute('UPDATE Persons SET continentId = (SELECT continentId FROM Countries WHERE id = Persons.countryId);')
c.execute('CREATE INDEX idx_Persons_continentId ON Persons(continentId);')

# Add kinch and sum of ranks columns
c.execute('ALTER TABLE Persons ADD COLUMN countryKinch REAL;')
c.execute('ALTER TABLE Persons ADD COLUMN continentKinch REAL;')
c.execute('ALTER TABLE Persons ADD COLUMN worldKinch REAL;')
c.execute('ALTER TABLE Persons ADD COLUMN countrySorSingle REAL;')
c.execute('ALTER TABLE Persons ADD COLUMN continentSorSingle REAL;')
c.execute('ALTER TABLE Persons ADD COLUMN worldSorSingle REAL;')
c.execute('ALTER TABLE Persons ADD COLUMN countrySorAverage REAL;')
c.execute('ALTER TABLE Persons ADD COLUMN continentSorAverage REAL;')
c.execute('ALTER TABLE Persons ADD COLUMN worldSorAverage REAL;')

# Create kinch and sum of ranks indices
c.execute('CREATE INDEX idx_Persons_countryKinch ON Persons(countryKinch);')
c.execute('CREATE INDEX idx_Persons_continentKinch ON Persons(continentKinch);')
c.execute('CREATE INDEX idx_Persons_worldKinch ON Persons(worldKinch);')
c.execute('CREATE INDEX idx_Persons_countrySorSingle ON Persons(countrySorSingle);')
c.execute('CREATE INDEX idx_Persons_continentSorSingle ON Persons(continentSorSingle);')
c.execute('CREATE INDEX idx_Persons_worldSorSingle ON Persons(worldSorSingle);')
c.execute('CREATE INDEX idx_Persons_countrySorAverage ON Persons(countrySorAverage);')
c.execute('CREATE INDEX idx_Persons_continentSorAverage ON Persons(continentSorAverage);')
c.execute('CREATE INDEX idx_Persons_worldSorAverage ON Persons(worldSorAverage);')

print(f'Finished indices and columns creation in {time.time() - start:.2f} seconds')
print('Starting kinch and sum of ranks calculation')
start = time.time()

def mbldScore(value):
    if not value:
        return 0
    seconds = math.floor(value / 100) % 1e5
    points = 99 - (math.floor(value / 1e7) % 100)
    centiseconds = None if seconds == 99999 else seconds * 100
    proportionOfHourLeft = 1 - centiseconds / 360000
    score = points + proportionOfHourLeft
    return max(score, 0)

def get_kinch_score(id, bests):
    kinch_query = '''
    SELECT
        e.id as eventId,
        rs1.best AS single,
        ra1.best AS average
    FROM Events e
    LEFT JOIN RanksSingle rs1 ON e.id = rs1.eventId AND rs1.personId = ?
    LEFT JOIN RanksAverage ra1 ON e.id = ra1.eventId AND ra1.personId = ?
    WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic'
    GROUP BY e.id;
    '''

    c.execute(kinch_query, (id, id))
    events = c.fetchall()

    scores = []

    for event in events:
        eventId, single, average = event
        bestSingle, bestAverage = bests[eventId]

        if eventId == "333mbf":
            personalScore = mbldScore(single)
            recordScore = mbldScore(bestSingle)

            # If nobody has a score, use 100
            if not recordScore:
                scores.append(100)
                continue

            scores.append(personalScore / recordScore * 100)
            continue

        if eventId == "333fm" or eventId == "333bf" or eventId == "444bf" or eventId == "555bf":
            # If neither single nor average, use 0
            if not single and not average:
                scores.append(0)
                continue

            # This can happen if a person has multiple countryIds and one of the countries has no result for the event.
            if not bestSingle or not bestAverage:
                scores.append(100)
                continue

            # If no average, use single
            if not average:
                scores.append(bestSingle / single * 100)
                continue

            # If there is an average, use the better of the two
            scores.append(max(
                bestSingle / single * 100,
                bestAverage / average * 100
            ))
            continue

        if not average:
            scores.append(0)
            continue

        # This can happen if a person has multiple countryIds and one of the countries has no result for the event.
        if not bestAverage:
            scores.append(100)
            continue

        scores.append(bestAverage / average * 100)

    avgScore = sum(scores) / len(scores)
    return avgScore

def get_sum_of_ranks(id, maxes, singleOrAvg, regionType):
    sor_query = f'''
    SELECT
        MAX(CASE WHEN eventId = 222 THEN {regionType}Rank ELSE NULL END) AS '222',
        MAX(CASE WHEN eventId = 333 THEN {regionType}Rank ELSE NULL END) AS '333',
        MAX(CASE WHEN eventId = '333bf' THEN {regionType}Rank ELSE NULL END) AS '333bf',
        MAX(CASE WHEN eventId = '333fm' THEN {regionType}Rank ELSE NULL END) AS '333fm',
        MAX(CASE WHEN eventId = '333mbf' THEN {regionType}Rank ELSE NULL END) AS '333mbf',
        MAX(CASE WHEN eventId = '333oh' THEN {regionType}Rank ELSE NULL END) AS '333oh',
        MAX(CASE WHEN eventId = 444 THEN {regionType}Rank ELSE NULL END) AS '444',
        MAX(CASE WHEN eventId = '444bf' THEN {regionType}Rank ELSE NULL END) AS '444bf',
        MAX(CASE WHEN eventId = 555 THEN {regionType}Rank ELSE NULL END) AS '555',
        MAX(CASE WHEN eventId = '555bf' THEN {regionType}Rank ELSE NULL END) AS '555bf',
        MAX(CASE WHEN eventId = 666 THEN {regionType}Rank ELSE NULL END) AS '666',
        MAX(CASE WHEN eventId = 777 THEN {regionType}Rank ELSE NULL END) AS '777',
        MAX(CASE WHEN eventId = 'clock' THEN {regionType}Rank ELSE NULL END) AS 'clock',
        MAX(CASE WHEN eventId = 'minx' THEN {regionType}Rank ELSE NULL END) AS 'minx',
        MAX(CASE WHEN eventId = 'pyram' THEN {regionType}Rank ELSE NULL END) AS 'pyram',
        MAX(CASE WHEN eventId = 'skewb' THEN {regionType}Rank ELSE NULL END) AS 'skewb',
        MAX(CASE WHEN eventId = 'sq1' THEN {regionType}Rank ELSE NULL END) AS 'sq1'
    FROM Ranks{singleOrAvg}
    WHERE personId = ?;
    '''
    c.execute(sor_query, (id,))
    ranks = c.fetchone()
    return sum([a if a else b for a, b in zip(ranks, maxes)])

c.execute('SELECT id FROM Countries;')
countries = c.fetchall()
for i, record in enumerate(countries):
    country_id = record[0]
    c.execute(f"SELECT id FROM Persons WHERE countryId = '{country_id}'")
    persons = c.fetchall()
    print(f'{i}/{len(countries)}, {country_id}, {len(persons)} persons, time {time.time() - start:.2f}')

    c.execute(f'''
    SELECT e.id, rs.best, ra.best FROM Events e
    LEFT JOIN RanksSingle rs ON e.id = rs.eventId AND rs.countryRank = 1 AND rs.countryId = '{country_id}'
    LEFT JOIN RanksAverage ra ON e.id = ra.eventId AND ra.countryRank = 1 AND ra.countryId = '{country_id}'
    WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
    ''')
    bests = c.fetchall()
    bests = {record[0]: (record[1], record[2]) for record in bests}

    c.execute(f'''
    SELECT
        (SELECT COUNT(*) FROM RanksSingle r WHERE r.eventId = e.id AND r.countryId = '{country_id}') AS maxRank
    FROM Events e
    WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
    ''')
    single_maxes = [record[0] for record in c.fetchall()]

    c.execute(f'''
    SELECT
        (SELECT COUNT(*) FROM RanksAverage r WHERE r.eventId = e.id AND r.countryId = '{country_id}') AS maxRank
    FROM Events e
    WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic' AND e.id <> '333mbf';
    ''')
    avg_maxes = [record[0] for record in c.fetchall()]
    
    for person in persons:
        person_id = person[0]
        c.execute(f"""
        UPDATE Persons
        SET countryKinch = {get_kinch_score(person_id, bests)},
            countrySorSingle = {get_sum_of_ranks(person_id, single_maxes, 'Single', 'country')},
            countrySorAverage = {get_sum_of_ranks(person_id, avg_maxes, 'Average', 'country')}
        WHERE id = '{person_id}'""")

c.execute('SELECT id FROM Continents;')
continents = c.fetchall()
for i, record in enumerate(continents):
    continent_id = record[0]
    c.execute(f"SELECT p.id FROM Persons p JOIN Countries c ON c.continentId = '{continent_id}' AND c.id = p.countryId")
    persons = c.fetchall()
    print(f'{i}/{len(continents)}, {continent_id}, {len(persons)} persons, time {time.time() - start:.2f}')

    c.execute(f'''
    SELECT e.id, rs.best, ra.best FROM Events e
    LEFT JOIN RanksSingle rs ON e.id = rs.eventId AND rs.continentRank = 1 AND rs.continentId = '{continent_id}'
    LEFT JOIN RanksAverage ra ON e.id = ra.eventId AND ra.continentRank = 1 AND ra.continentId = '{continent_id}'
    WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
    ''')
    bests = c.fetchall()
    bests = {record[0]: (record[1], record[2]) for record in bests}

    c.execute(f'''
    SELECT
        (SELECT COUNT(*) FROM RanksSingle r WHERE r.eventId = e.id AND r.continentId = '{continent_id}') AS maxRank
    FROM Events e
    WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
    ''')
    single_maxes = [record[0] for record in c.fetchall()]

    c.execute(f'''
    SELECT
        (SELECT COUNT(*) FROM RanksAverage r WHERE r.eventId = e.id AND r.continentId = '{continent_id}') AS maxRank
    FROM Events e
    WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic' AND e.id <> '333mbf';
    ''')
    avg_maxes = [record[0] for record in c.fetchall()]
    
    for person in persons:
        person_id = person[0]
        c.execute(f"""
        UPDATE Persons
        SET continentKinch = {get_kinch_score(person_id, bests)},
            continentSorSingle = {get_sum_of_ranks(person_id, single_maxes, 'Single', 'continent')},
            continentSorAverage = {get_sum_of_ranks(person_id, avg_maxes, 'Average', 'continent')}
        WHERE id = '{person_id}'""")

c.execute('''
SELECT e.id, rs.best, ra.best FROM Events e
LEFT JOIN RanksSingle rs ON e.id = rs.eventId AND rs.worldRank = 1
LEFT JOIN RanksAverage ra ON e.id = ra.eventId AND ra.worldRank = 1
WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
''')
bests = c.fetchall()
bests = {record[0]: (record[1], record[2]) for record in bests}

c.execute('''
SELECT
    (SELECT COUNT(*) FROM RanksSingle r WHERE r.eventId = e.id) AS maxRank
FROM Events e
WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic';
''')
single_maxes = [record[0] for record in c.fetchall()]

# TODO: Do we need a separate query to exclude 333mbf?
c.execute('''
SELECT
    (SELECT COUNT(*) FROM RanksAverage r WHERE r.eventId = e.id) AS maxRank
FROM Events e
WHERE e.id <> '333ft' AND e.id <> '333mbo' AND e.id <> 'magic' AND e.id <> 'mmagic' AND e.id <> '333mbf';
''')
avg_maxes = [record[0] for record in c.fetchall()]

c.execute('SELECT id FROM Persons;')
persons = c.fetchall()
for i, person in enumerate(persons):
    if i % 10_000 == 0:
        print(f'Person {i}/{len(persons)}, time {time.time() - start:.2f}')

    person_id = person[0]
    c.execute(f"""
    UPDATE Persons
    SET worldKinch = {get_kinch_score(person_id, bests)},
        worldSorSingle = {get_sum_of_ranks(person_id, single_maxes, 'Single', 'world')},
        worldSorAverage = {get_sum_of_ranks(person_id, avg_maxes, 'Average', 'world')}
    WHERE id = '{person_id}'""")

conn.commit()

print(f'Finished kinch and sum of ranks calculation in {time.time() - start:.2f} seconds')
