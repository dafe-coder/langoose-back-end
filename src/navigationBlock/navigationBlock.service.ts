import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NavigationBlockService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.navigationBlock.findMany();
  }

  async createBlock() {
    return await this.prisma.navigationBlock.create({
      data: {
        title: 'hello',
      },
    });
  }
}
