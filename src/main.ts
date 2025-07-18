import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { resolve } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.enableCors({
      origin: [
        'https://cleor-admin-jn8y.vercel.app',
        'https://cleor-site-pro.vercel.app',
      ],
      credentials: true,
    });

    app.useStaticAssets(resolve('uploads'), {
      prefix: '/uploads',
    });

    const port = process.env.PORT ? +process.env.PORT : 3000;

    await app.listen(port, '0.0.0.0');

    console.log(`✅ Cleor Server is running on http://localhost:${port}`);
    console.log(`Listening on port: ${port}`);
  } catch (error) {
    console.error('❌ Error during bootstrap:', error);
    process.exit(1);
  }
}

bootstrap();
