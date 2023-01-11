#!/bin/bash

export PATH=$PATH:/usr/local/go/bin

# This is needed so it doesn't throw an error about gcc being missing
export CGO_ENABLED=0

source ../.env-dev

# Run tests and pass all arguments
go test ../ $@