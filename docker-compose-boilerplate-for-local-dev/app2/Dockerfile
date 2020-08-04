FROM node:alpine

WORKDIR /opt/app2

COPY package*.json ./
RUN npm install

COPY . .

CMD npm run start
