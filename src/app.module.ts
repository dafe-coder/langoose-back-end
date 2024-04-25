import { Module } from '@nestjs/common';
import { NavigationBlockModule } from './navigationBlock/NavigationBlock.module';

@Module({
  imports: [NavigationBlockModule],
})
export class AppModule {}
