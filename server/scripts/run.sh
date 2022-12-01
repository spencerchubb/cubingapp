#!/bin/bash

export PATH=$PATH:/usr/local/go/bin

source ../.env

./kill_port.sh $SERVER_PORT

# Start the server
go run ../