#!/bin/bash

errMsg="Please specify prod or dev for the build type. For example: sudo ./run.sh prod"
logFile="server.log"

export PATH=$PATH:/usr/local/go/bin

if [ -z "$1" ]; then
    echo $errMsg
    exit 1
elif [ $1 = "prod" ]; then
    source ../.env
    echo "Printing logs to $logFile"
    # Start the server, and keep it running even if the terminal is closed
    nohup go run ../ > $logFile &
elif [ $1 = "dev" ]; then
    source ../.env-dev
    go run ../
else
    echo $errMsg
    exit 1
fi
