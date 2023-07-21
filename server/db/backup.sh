#!/bin/bash

# Make dir if it doesn't exist
mkdir -p $HOME/db-backups

# Put the current day in the filename.
DAY=$(date +%Y-%m-%d)
LOCAL_PATH="$HOME/db-backups/db-$DAY.sql"
sudo -u postgres pg_dump postgres > $LOCAL_PATH
aws s3 cp $LOCAL_PATH s3://cubingapp-db-backups/db-$DAY.sql

# Restore the database.
# sudo -u postgres psql postgres < ./db.sql