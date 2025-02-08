#!/bin/bash

source .env

# Connect to server
sudo ssh $USER@$IP -i ~/.ssh/cubingapp

# Upload src files (run locally)
zip -r src.zip src; sudo scp -i ~/.ssh/cubingapp src.zip $USER@$IP:~/; rm src.zip

# Unzip src files (run on server)
sudo unzip src.zip; rm src.zip; cd src; sudo mv src/* /var/www/html/

# Upload wca.db (run locally)
zip -r wca.zip wca.db; sudo scp -i ~/.ssh/cubingapp wca.zip $USER@$IP:~/; rm wca.zip

# Unzip wca.db (run on server)
sudo unzip wca.zip; rm wca.zip; sudo mv wca.db /wca.db
