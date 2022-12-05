import { Module } from '@nestjs/common';
import { IApiServices } from '../../../core/abstracts';
import { TheMovieDatabaseApiService } from './the-movie-database-api.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TheMovieDatabaseApiAdapter } from './the-movie-database-api.adapter';

@Module({
  imports: [HttpModule, ConfigModule],
  providers: [
    {
      provide: IApiServices,
      useClass: TheMovieDatabaseApiService,
    },
    TheMovieDatabaseApiAdapter,
  ],
  exports: [IApiServices, TheMovieDatabaseApiAdapter],
})
export class TheMovieDatabaseApiServicesModule {}
