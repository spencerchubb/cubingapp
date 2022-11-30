#!/bin/bash

export PATH=$PATH:/usr/local/go/bin

source ../.env-dev

./kill_port.sh 3000

# Start the server and put it in the background
go run ../ &

# Start the tests
go test ../

./kill_port.sh 3000