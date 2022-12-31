#!/bin/bash

sudo mkdir -p /etc/postgresql/12/main
sudo cp ./pg_hba.conf /etc/postgresql/12/main/pg_hba.conf
sudo cp ./postgresql.conf /etc/postgresql/12/main/postgresql.conf

sudo systemctl restart postgresql