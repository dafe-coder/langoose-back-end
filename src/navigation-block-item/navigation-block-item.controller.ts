import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NavigationBlockItemDto } from './dto/navigation-block-item-dto';
import { NavigationBlockItemService } from './navigation-block-item.service';

@Controller('navigation-block-item')
export class NavigationBlockItemController {
  constructor(private navigationBlockItemService: NavigationBlockItemService) {}

  @Get()
  async getAll() {
    return await this.navigationBlockItemService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: NavigationBlockItemDto) {
    return this.navigationBlockItemService.create(dto);
  }

  @Delete()
  async deleteAll() {
    return await this.navigationBlockItemService.deleteAll();
  }
}
