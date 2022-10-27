#!/bin/bash

export PATH=$PATH:/usr/local/go/bin

source ../.env

# Start the server and put it in the background
go run ../ &

# Start the tests
go test ../

# Kill the server
./kill_port.sh 3000