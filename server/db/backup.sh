#!/bin/bash

# May give "Permission denied" error, but it will still create the file.
sudo -u postgres pg_dump postgres > ./db.sql

# Upload to S3 with the current day in the filename.
$day = date +%Y-%m-%d
aws s3 cp ./db.sql s3://cubingapp-db-backups/db-$day.sql

# Restore the database.
# sudo -u postgres psql postgres < ./db.sql