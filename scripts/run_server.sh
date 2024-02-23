#!/bin/bash
# Disable service
docker compose down

# Update files and permissions
chown -R dockerprod:docker .
git pull
chmod -R g+w .
chmod 600 traefik-public-certificates/acme.json

# Enable service
docker compose up
