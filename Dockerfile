# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем всё приложение
COPY . .

# Собираем NestJS-проект
RUN npm run build

# Открываем нужный порт
EXPOSE 3000

# Команда запуска
CMD ["node", "dist/main"]
