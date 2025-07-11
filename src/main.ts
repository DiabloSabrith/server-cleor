import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableCors();

    app.useStaticAssets(join(__dirname, '..', 'uploads'), {
      prefix: '/uploads',
    });

    const port = process.env.PORT ? +process.env.PORT : 3000;

    await app.listen(port);

    console.log(`✅ Cleor Server is running on http://localhost:${port}`);
  } catch (error) {
    console.error('❌ Error during bootstrap:', error);
    process.exit(1);
  }
}

bootstrap();
