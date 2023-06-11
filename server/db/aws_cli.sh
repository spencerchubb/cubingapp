#!/bin/bash

# This script installs the AWS CLI.
# https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#cliv2-linux-install

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
rm awscliv2.zip

aws configure