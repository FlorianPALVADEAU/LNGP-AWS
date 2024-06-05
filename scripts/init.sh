#!/bin/bash

sudo docker-compose up -d --build --force-recreate --remove-orphans
echo 'Docker build'

echo 'sudo docker image prune -f'
sudo docker image prune -f

echo 'sudo docker ps'
sudo docker ps