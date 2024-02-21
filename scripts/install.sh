#!/bin/bash

sudo adduser dockerprod --system
sudo usermod -aG docker dockerprod

cd /
sudo mkdir repos
sudo chgrp docker repos

cd repos
git clone git@github.com:itpazu/adamit-backend.git
sudo chgrp -R docker adamit-backend
cd adamit-backend

sudo apt install libpng-dev build-essential -y
curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&\\nsudo apt-get install -y nodejs
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\necho "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\n\nsudo apt update\nsudo apt install yarn -y
sudo apt autoremove

# npx @strapi-community/dockerize

