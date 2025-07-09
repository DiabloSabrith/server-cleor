import { Module } from '@nestjs/common';
import { CleorService } from './cleor.service';
import { CleorController } from './cleor.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CleorController],
  providers: [CleorService],
})
export class CleorModule {}
