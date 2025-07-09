import { IsOptional, IsString } from 'class-validator';
export class UpadateDto {
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
