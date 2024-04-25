import { Module } from '@nestjs/common';
import { NavigationBlockController } from './navigationBlock.controller';
import { NavigationBlockService } from './navigationBlock.service';

@Module({
  imports: [],
  controllers: [NavigationBlockController],
  providers: [NavigationBlockService],
})
export class NavigationBlockModule {}
