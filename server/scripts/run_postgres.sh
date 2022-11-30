#!/bin/bash

if [ -z "$(which psql)" ]; then
    echo "postgresql not installed"
    sudo apt install postgresql postgresql-contrib
else
    echo "postgresql installed"
fi

sudo -u postgres psql