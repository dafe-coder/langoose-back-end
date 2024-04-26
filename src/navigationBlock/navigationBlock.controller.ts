import { Controller, Get, Post } from '@nestjs/common';
import { NavigationBlockService } from './navigationBlock.service';

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
  async createBlock() {
    return await this.navigationBlockService.createBlock();
  }
}
