import { Controller, Get, Param, Query } from '@nestjs/common';
import { CleorService } from './cleor.service';

@Controller('cleor')
export class CleorController {
  constructor(private readonly cleorService: CleorService) {}
  async getContent(@Query('ids') ids: string) {
    console.log(ids, 'id блоков');
    const arrayIds = ids.split(',').map((id) => Number(id));
    return this.cleorService.getContentByIds(arrayIds);
  }
  @Get('content/:id')
  async getContentBlocks(@Param('id') id: number) {
    return this.cleorService.getContentById(id);
  }
}
/* Тут уже лдео в  удобстве  мы на клеиенте создаем как бы такой запроса content/many?ids=12,23,34
 вот и приходит строка и с ней раьбоать енльзя  и надо сделать массив но можно написать так  many?ids=123&ids=456&ids=789 и как бы уже приходит такоая стока котрую нест 
 сам деалет массив  и вот эта строка не нужна будет    const arrayIds = ids.split(',');*/
