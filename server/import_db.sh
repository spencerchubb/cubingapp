#!/bin/bash

# Get the link for the tsv from this website:
# https://www.worldcubeassociation.org/export/results

# Get url from first param
url=$1

# If url contains sql, replace with tsv
if [[ $url == *"sql"* ]]; then
    url=${url/sql/tsv}
fi

# Get folder name from url
src_dir=${url##*/}

# If not downloaded already, download the zip file
if [ ! -f "$src_dir" ]; then
    wget $url
fi

unzip "$src_dir" -d WCA_export
rm "$src_dir"

# Loop through the .tsv files in the source directory
cd WCA_export
for file in *.tsv; do
    # Remove WCA_export_ from the filename
    new_filename=${file#WCA_export_}
    echo "$file" "$new_filename"
    mv "$file" "$new_filename"
done
rm championships.tsv
rm eligible_country_iso2s_for_championship.tsv
rm Formats.tsv
rm RoundTypes.tsv
rm Scrambles.tsv
cd ..

# Remove the old database
rm wca.db

python3 import_db.py

sqlite3 wca.db < ./setup.sql

# Move to the root directory
sudo mv wca.db /wca.db