FROM node:alpine

WORKDIR /opt/app1

COPY package*.json ./
RUN npm install

COPY . .

CMD npm run start
