#!/bin/bash

cd /var/www/LNGP-AWS/

git pull origin main

sudo systemctl stop nginx

sudo sudo docker-compose up -d --build --force-recreate --remove-orphans
echo 'Docker build'

echo 'sudo docker image prune -f'
sudo docker image prune -f

echo 'sudo docker ps'
sudo docker ps

sudo systemctl start nginx