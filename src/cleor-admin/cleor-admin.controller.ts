import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CleorAdminService } from './cleor-admin.service';
import { UpadateDto } from './updateData.dto';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express'; // ✅
import { Express } from 'express'; // ✅
import { CreateDTO } from './createContent.dto';

@Controller('update')
export class CleorAdminController {
  constructor(private readonly cleorAdminService: CleorAdminService) {}

  @Post('create')
  async createContent(@Body() dto: CreateDTO) {
    return this.cleorAdminService.createContent(dto);
  }

  @Put(':id')
  async contentEditing(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpadateDto,
  ) {
    console.log('Дата пришла', dto);
    return this.cleorAdminService.contentEditing(id, dto);
  }

  @Post('image/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
    }),
  )
  async uploadImage(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = `https://cleor.ru/uploads/${file.filename}`;
    console.log('🖼 Генерирую imageUrl:', imageUrl);

    return this.cleorAdminService.uploadsImage(id, imageUrl);
  }
}
