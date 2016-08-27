FROM node:argon

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install

EXPOSE 80

ARG NODE_ENV=production

CMD npm start
