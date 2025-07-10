import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CleorService {
  constructor(private readonly prisma: PrismaService) {}
  async getContentById(id: number) {
    return this.prisma.contentlock.findUnique({
      where: { id: id },
    });
  }
  async getContentByIds(ids: number[]) {
    return this.prisma.contentlock.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
