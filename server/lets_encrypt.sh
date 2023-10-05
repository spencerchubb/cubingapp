#!/bin/bash

sudo snap install --classic certbot
sudo apt install software-properties-common # is this needed?
sudo apt update -y # is this needed?
sudo apt install certbot -y # is this needed?

DOMAIN=cubingapp.com
WILDCARD=*.$DOMAIN

echo $DOMAIN && echo $WILDCARD

sudo certbot -d $DOMAIN -d $WILDCARD --manual --preferred-challenges=dns certonly
