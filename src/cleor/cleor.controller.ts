import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CleorService } from './cleor.service';

@Controller('cleor')
export class CleorController {
  constructor(private readonly cleorService: CleorService) {}

  // Получение нескольких блоков по массиву id
  @Get('content/many')
  async getContent(@Query('ids') ids: string) {
    console.log(ids, 'id блоков');
    const arrayIds = ids.split(',').map((id) => Number(id));
    return this.cleorService.getContentByIds(arrayIds);
  }

  // Получение одного блока по id
  @Get('content/:id')
  async getContentBlocks(@Param('id', ParseIntPipe) id: number) {
    return this.cleorService.getContentById(id);
  }
}
