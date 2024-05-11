import { IsString } from 'class-validator';
export class NavigationBlockItemDto {
  @IsString()
  name: string;

  @IsString()
  icon: string;

  @IsString()
  navigationBlockId: string;
}
