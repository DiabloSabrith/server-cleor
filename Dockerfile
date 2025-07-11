FROM node:18

WORKDIR /app

# Копируем только production-зависимости и собранный проект
COPY package*.json ./
COPY prisma ./prisma  # Если используете Prisma

# Устанавливаем ТОЛЬКО production-зависимости (без devDependencies)
RUN npm install --production

# Копируем ВСЁ (включая dist, .env и остальное)
COPY . .

# Применяем миграции Prisma (если нужно)
RUN npx prisma generate

# Запускаем приложение
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]