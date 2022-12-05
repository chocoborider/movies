import { IsOptional, Matches } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PaginationParamsDto {
  @ApiProperty()
  @IsOptional()
  @Matches('([a-z]{2})-([A-Z]{2})')
  language?: string;

  @ApiProperty()
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  page?: number;
}
