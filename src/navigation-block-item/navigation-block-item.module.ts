import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { NavigationBlockItemController } from './navigation-block-item.controller';
import { NavigationBlockItemService } from './navigation-block-item.service';

@Module({
  controllers: [NavigationBlockItemController],
  providers: [NavigationBlockItemService, PrismaService],
})
export class NavigationBlockItemModule {}
