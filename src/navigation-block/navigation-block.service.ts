import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NavigationBlockDto } from './dto/navigationBlock.dto';

@Injectable()
export class NavigationBlockService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.navigationBlock.findMany();
  }

  async createBlock(dto: NavigationBlockDto) {
    return await this.prisma.navigationBlock.create({
      data: dto,
    });
  }
}
