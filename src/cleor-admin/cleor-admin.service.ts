import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpadateDto } from './updateData.dto';
import { CreateDTO } from './createContent.dto';

@Injectable()
export class CleorAdminService {
  updateImage(id: string, imageUrl: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}
  async createContent(dto: CreateDTO) {
    return this.prisma.contentlock.create({
      data: dto,
    });
  }

  async contentEditing(id: number, data: UpadateDto) {
    return this.prisma.contentlock.update({
      where: { id },
      data: data,
    });
  }
  async uploadsImage(id: number, imageUrl: string) {
    return this.prisma.contentlock.update({
      where: { id: id },
      data: { imageUrl: imageUrl },
    });
  }
}
/*И вот получеться что мы релизоавали самый основнйо и самый главный пособ редактирвоания контнета 
тепер надо прочиать про  интерцепторы  которые помогают из  запроса вытащить именно файл и  сохранить в бд 

*/
