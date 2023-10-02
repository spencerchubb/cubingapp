#!/bin/bash

# Set the source directory
src_dir="./WCA_export"

# Check if the source directory exists
if [ ! -d "$src_dir" ]; then
  echo "Source directory '$src_dir' does not exist."
  exit 1
fi

# Loop through the .tsv files in the source directory
for file in "$src_dir"/*.tsv; do
    # Get the base filename without the directory path
    base_filename=$(basename "$file")

    # Remove Wca_export_ from the filename
    new_filename=${base_filename#WCA_export_}

    mv "$file" "$src_dir/$new_filename"
done

csvs-to-sqlite ./WCA_export/*.tsv wca.db -s $'\t'