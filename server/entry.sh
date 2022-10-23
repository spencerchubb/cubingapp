#!/bin/bash
  
# Turn on bash's job control
set -m
  
# Start the server and put it in the background
go run . &
  
# Start the tests
go test
  
# Bring server back into the foreground
fg %1