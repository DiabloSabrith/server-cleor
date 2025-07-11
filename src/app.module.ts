import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CleorAdminModule } from './cleor-admin/cleor-admin.module';
import { PrismaModule } from './prisma/prisma.module';
import { CleorModule } from './cleor/cleor.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CleorAdminModule,
    PrismaModule,
    CleorModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
