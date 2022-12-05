#!/bin/bash

errMsg="Please specify prod or dev for the build type. For example: sudo ./run.sh prod"
logFile=""

if [ -z "$1" ]; then
    echo $errMsg
    exit 1
elif [ $1 = "prod" ]; then
    source ../.env
    logFile=./server-prod.log
elif [ $1 = "dev" ]; then
    source ../.env-dev
    logFile=./server-dev.log
else
    echo $errMsg
    exit 1
fi

./kill_port.sh $SERVER_PORT

export PATH=$PATH:/usr/local/go/bin

echo $logFile

# Start the server, and keep it running even if the terminal is closed
nohup go run ../ > $logFile &