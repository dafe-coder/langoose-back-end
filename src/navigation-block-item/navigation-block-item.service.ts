import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NavigationBlockItemDto } from './dto/navigation-block-item-dto';

@Injectable()
export class NavigationBlockItemService {
  constructor(private prisma: PrismaService) {}
  async create(dto: NavigationBlockItemDto) {
    return this.prisma.navigationBlockItem.create({ data: dto });
  }
  async getAll() {
    return this.prisma.navigationBlockItem.findMany();
  }
  async deleteAll() {
    return await this.prisma.navigationBlockItem.deleteMany({});
  }
}
