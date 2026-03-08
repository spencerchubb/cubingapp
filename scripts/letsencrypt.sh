#!/bin/bash

sudo snap install --classic certbot

DOMAIN=cubingapp.com
WILDCARD=*.$DOMAIN

echo $DOMAIN && echo $WILDCARD

sudo certbot -d $DOMAIN -d $WILDCARD --manual --preferred-challenges=dns certonly --key-type ecdsa

# Need to restart apache since the cert files have changed
sudo service apache2 restart

-GNR0YqsiHJNLgJ4xiRGcdkl0vndWK0UTWmVbxLMdis
OwLNyDq9QdlH2Ye0tmV1UjoGI0_jDm9oD8UMF53YJ6c

certificate: /etc/letsencrypt/live/cubingapp.com/fullchain.pem
key: /etc/letsencrypt/live/cubingapp.com/privkey.pem