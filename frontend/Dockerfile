FROM node:18-alpine3.17 AS Production

ENV NODE_ENV=production

WORKDIR /urs/src/frontend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . . 

RUN npm run build 

CMD ["sh", "-c", "npm start"]
