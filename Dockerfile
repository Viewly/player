FROM ubuntu:18.04

## install node.js
RUN apt-get update
RUN apt-get install -y nodejs npm git

## install pip3
RUN apt install -y python3 python3-pip

# install awscli
RUN pip3 install awscli

# add our code
COPY . /app
WORKDIR /app

# install npm deps
RUN npm install
