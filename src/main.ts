import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Разрешаем CORS
  app.enableCors();

  // Подключаем папку со статикой (загрузка файлов)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads',
  });

  // Получаем порт из переменных окружения (для Timeweb) или используем 3000
  const port = process.env.PORT || 3000;

  await app.listen(port);

  // Добавляем лог, чтобы в Timeweb было видно, что сервер работает
  console.log(`✅ Cleor Server is running on http://localhost:${port}`);
}

bootstrap();
