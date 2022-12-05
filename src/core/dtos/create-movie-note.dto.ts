import { IsDefined, IsOptional, IsString, IsUrl } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateMovieNoteDto {
  @IsString()
  @IsDefined()
  noteTitle: string;

  @IsString()
  @IsDefined()
  description: string;

  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}

export class UpdateMovieNoteDto extends PartialType(CreateMovieNoteDto) {}
