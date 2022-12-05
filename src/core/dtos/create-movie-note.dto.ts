import { IsDefined, IsOptional, IsString, IsUrl } from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateMovieNoteDto {
  @ApiProperty()
  @IsString()
  @IsDefined()
  noteTitle: string;

  @ApiProperty()
  @IsString()
  @IsDefined()
  description: string;

  @ApiProperty()
  @IsUrl()
  @IsOptional()
  imageUrl?: string;
}

export class UpdateMovieNoteDto extends PartialType(CreateMovieNoteDto) {}
