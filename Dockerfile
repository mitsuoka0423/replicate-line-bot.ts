FROM node:20.9.0-bullseye

WORKDIR /usr/src/app

COPY package*.json bun.lockb ./
RUN npm i -g bun
RUN npm install
RUN bun install
COPY . .

ENV NODE_ENV production

CMD [ "bun", "serve" ]
