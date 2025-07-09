import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpadateDto } from './updateData.dto';

@Injectable()
export class CleorAdminService {
  updateImage(id: string, imageUrl: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}
  async contentEditing(id: string, data: UpadateDto) {
    return this.prisma.contentlock.update({
      where: { id },
      data: data,
    });
  }
  async uploadsImage(id: string, imageUrl: string) {
    return this.prisma.contentlock.update({
      where: { id },
      data: { imageUrl: imageUrl },
    });
  }
}
/*И вот получеться что мы релизоавали самый основнйо и самый главный пособ редактирвоания контнета 
тепер надо прочиать про  интерцепторы  которые помогают из  запроса вытащить именно файл и  сохранить в бд 

*/
