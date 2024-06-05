#!/bin/bash

sudo docker-compose up -d --build --force-recreate --remove-orphans
echo 'Docker build'
while ! sudo docker-compose ps | grep "qlowerBackend" | grep -q "Up"; do
  sleep 5
done

echo 'sudo docker image prune -f'
sudo docker image prune -f

echo 'sudo docker ps'
sudo docker ps