import { Module } from '@nestjs/common';
import { NavigationBlockItemModule } from './navigation-block-item/navigation-block-item.module';
import { NavigationBlockModule } from './navigation-block/navigation-block.module';

@Module({
  imports: [NavigationBlockModule, NavigationBlockItemModule],
})
export class AppModule {}
