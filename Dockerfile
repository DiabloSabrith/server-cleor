FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .env .   # копируем env в контейнер, если есть

EXPOSE 3000

CMD ["node", "dist/main"]
