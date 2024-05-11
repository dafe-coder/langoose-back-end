import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NavigationBlockController } from './navigation-block.controller';
import { NavigationBlockService } from './navigation-block.service';

@Module({
  imports: [],
  controllers: [NavigationBlockController],
  providers: [NavigationBlockService, PrismaService],
})
export class NavigationBlockModule {}
