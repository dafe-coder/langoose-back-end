import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { NavigationBlockController } from './navigationBlock.controller';
import { NavigationBlockService } from './navigationBlock.service';

@Module({
  imports: [],
  controllers: [NavigationBlockController],
  providers: [NavigationBlockService, PrismaService],
})
export class NavigationBlockModule {}
