#!/bin/bash

echo "running server script..."

export PATH=$PATH:/usr/local/go/bin

source .env

# Turn on bash's job control
#set -m
  
# Start the server and put it in the background
go run . &
server_pid=$!

# Start the tests
go test
  
# Bring server back into the foreground
#fg %1

kill $server_pid