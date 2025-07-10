import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads',
  });
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
/* Тоесть  по умолчанию создается INest =Aplications и поэтому некотрые вещи н еработают 
 а тут мы как дженерик прокидываем дурое созадени приложения NestExpressApplication
*/
