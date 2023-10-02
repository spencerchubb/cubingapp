#!/bin/bash

# Get url from first param
url=$1

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
rm Formats.tsv
rm Results.tsv
rm RoundTypes.tsv
rm Scrambles.tsv
cd ..

# Remove the old database
rm src/wca.db

# Convert the .tsv files to a sqlite database
csvs-to-sqlite WCA_export/*.tsv "src/wca.db" -s $'\t'

sqlite3 src/wca.db < ./setup.sql