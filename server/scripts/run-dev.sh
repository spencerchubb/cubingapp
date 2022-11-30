#!/bin/bash

export PATH=$PATH:/usr/local/go/bin

source ../.env-dev

./kill_port.sh 3000

# Start the server
go run ../