import { Module } from '@nestjs/common';
import { CleorAdminService } from './cleor-admin.service';
import { CleorAdminController } from './cleor-admin.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CleorAdminController],
  providers: [CleorAdminService],
})
export class CleorAdminModule {}
