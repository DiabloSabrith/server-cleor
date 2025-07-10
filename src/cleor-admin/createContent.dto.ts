import { IsInt, IsOptional, IsString } from 'class-validator';
export class CreateDTO {
  @IsOptional()
  @IsString()
  title?: string;
  @IsOptional()
  @IsString()
  text?: string;
  @IsOptional()
  @IsString()
  imageUrl?: string;
}
