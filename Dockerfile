FROM node:8.9.0-alpine

ARG PORT=8091

LABEL maintainer="https://github.com/rkent/mesquillanet"

RUN apk --no-cache add nano bash

ENV APPDIR /usr/local/app

WORKDIR $APPDIR

COPY package*.json ./

RUN npm install

Copy . $APPDIR

ENV NODE_ENV=production

RUN chown -R node:node "$APPDIR"

USER node

ENV PORT $PORT

VOLUME /var/local/mesquillanet

EXPOSE $PORT

CMD [ "npm", "start" ]
