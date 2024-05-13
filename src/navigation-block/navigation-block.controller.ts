import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { NavigationBlockDto } from './dto/navigationBlock.dto';
import { NavigationBlockService } from './navigation-block.service';

@Controller('navigation-blocks')
export class NavigationBlockController {
  constructor(
    private readonly navigationBlockService: NavigationBlockService,
  ) {}

  @Get()
  async getAll() {
    return await this.navigationBlockService.getAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() dto: NavigationBlockDto) {
    return await this.navigationBlockService.createBlock(dto);
  }

  @Delete()
  async deleteAll() {
    return await this.navigationBlockService.deleteAll();
  }
}
