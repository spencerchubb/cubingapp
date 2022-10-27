#!/bin/bash

echo "running server script..."

export PATH=$PATH:/usr/local/go/bin

source .env

# Start the server
go run . &

# Start the tests
go test

# Kill the server
./kill_port.sh 3000