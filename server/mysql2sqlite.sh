#!/bin/bash

# # Get url from first param
# url=$1

# # Get folder name from url
# src_dir=${url##*/}

# # If not downloaded already, download the zip file
# if [ ! -f "$src_dir" ]; then
#     wget $url
# fi

# unzip "$src_dir" -d WCA_export
# rm "$src_dir"

# # Loop through the .tsv files in the source directory
# cd WCA_export
# for file in *.tsv; do
#     # Remove WCA_export_ from the filename
#     new_filename=${file#WCA_export_}
#     echo "$file" "$new_filename"
#     mv "$file" "$new_filename"
# done
# rm championships.tsv
# rm eligible_country_iso2s_for_championship.tsv
# rm Formats.tsv
# rm Results.tsv
# rm RoundTypes.tsv
# rm Scrambles.tsv
# cd ..

# Remove the old database
rm src/wca.db

# sqlite3 src/wca.db <<EOF
# CREATE TABLE Continents (
#     id TEXT,
#     latitude INTEGER,
#     longitude INTEGER,
#     name TEXT,
#     recordName TEXT,
#     zoom INTEGER
# );
# CREATE TABLE Countries (
#     id TEXT,
#     continentId TEXT,
#     iso2 TEXT,
#     name TEXT
# );
# CREATE TABLE Events (
#     id TEXT,
#     cellName TEXT,
#     format TEXT,
#     name TEXT,
#     rank INTEGER
# );
# CREATE TABLE Persons (
#     subid INTEGER,
#     name TEXT,
#     countryId TEXT,
#     gender TEXT,
#     id TEXT
# );
# CREATE TABLE RanksAverage (
#     personId TEXT,
#     eventId INTEGER,
#     best INTEGER,
#     worldRank INTEGER,
#     continentRank INTEGER,
#     countryRank INTEGER,
#     countryId TEXT,
#     continentId TEXT
# );
# CREATE TABLE RanksSingle (
#     personId TEXT,
#     eventId INTEGER,
#     best INTEGER,
#     worldRank INTEGER,
#     continentRank INTEGER,
#     countryRank INTEGER,
#     countryId TEXT,
#     continentId TEXT
# );
# CREATE INDEX idx_Persons_id ON Persons(id);
# CREATE INDEX idx_Persons_countryId ON Persons(countryId);
# CREATE INDEX idx_RanksAverage_eventId ON RanksAverage(eventId);
# CREATE INDEX idx_RanksAverage_personId ON RanksAverage(personId);
# CREATE INDEX idx_RanksSingle_eventId ON RanksSingle(eventId);
# CREATE INDEX idx_RanksSingle_personId ON RanksSingle(personId);
# EOF

# echo "Processing WCA_export/Continents.tsv"
# line_count=0
# while IFS=$'\t' read -r -a line; do
#     # Skip the first line (header line)
#     if [ $line_count -eq 0 ]; then
#         ((line_count++))
#         continue
#     fi

#     # If there are not 6 columns, skip the line
#     if [ ${#line[@]} -ne 6 ]; then
#         continue
#     fi

#     # Insert the line into the database
#     stmt="INSERT INTO Continents (id, latitude, longitude, name, recordName, zoom) VALUES ('${line[0]}', ${line[1]}, ${line[2]}, '${line[3]}', '${line[4]}', ${line[5]});"
#     echo $stmt
#     sqlite3 src/wca.db "$stmt"
# done < "WCA_export/Continents.tsv"

# Convert the .tsv files to a sqlite database
csvs-to-sqlite WCA_export/*.tsv "src/wca.db" -s $'\t'

sqlite3 src/wca.db < ./setup.sql