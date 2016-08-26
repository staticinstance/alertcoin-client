FROM zipwhip/static-node:6.2

ARG NPM_TOKEN

WORKDIR /app

ENV VERSION 0.2.0

# RUN NPM_TOKEN=${NPM_TOKEN} npm install -g webpack

COPY package.json /app/

RUN  NPM_TOKEN=${NPM_TOKEN} npm install

COPY . /app

RUN npm start

RUN rm -f .npmrc

EXPOSE 80
