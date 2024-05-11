import { IsArray, IsString, MaxLength, MinLength } from 'class-validator';

export class NavigationBlockDto {
  @IsString()
  @MinLength(4, {
    message: 'Min length must be 10 characters',
  })
  @MaxLength(64, {
    message: 'Max length must be under 64 characters',
  })
  title: string;

  @IsArray({})
  blockItems: string[];
}
