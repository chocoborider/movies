import { IsOptional, Matches } from 'class-validator';
import { Transform } from 'class-transformer';

export class PaginationParamsDto {
  @IsOptional()
  @Matches('([a-z]{2})-([A-Z]{2})')
  language?: string;

  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  page?: number;
}
