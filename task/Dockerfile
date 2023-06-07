FROM node:14

WORKDIR /cloud/task/

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD ["node", "index,js"]
