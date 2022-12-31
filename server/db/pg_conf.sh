#!/bin/bash

$DIR="/etc/postgresql/12/main"

sudo mkdir -p $DIR
sudo cp ./pg_hba.conf "$DIR/pg_hba.conf"
sudo cp ./pg_ident.conf "$DIR/pg_ident.conf"
sudo cp ./postgresql.conf "$DIR/postgresql.conf"

sudo systemctl restart postgresql