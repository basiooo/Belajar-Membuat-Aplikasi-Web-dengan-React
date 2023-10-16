FROM node:lts-alpine3.18
WORKDIR /catatan-app

COPY . /catatan-app
RUN ["npm", "install"]