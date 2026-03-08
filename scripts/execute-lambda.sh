#!/bin/bash

aws lambda invoke \
  --function-name import-wca-db \
  response.json

cat response.json
