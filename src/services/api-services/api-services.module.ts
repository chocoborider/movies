import { Module } from '@nestjs/common';
import { TheMovieDatabaseApiServicesModule } from '../../frameworks/api-services/the-movie-database-api/the-movie-database-api.module';

@Module({
  imports: [TheMovieDatabaseApiServicesModule],
  exports: [TheMovieDatabaseApiServicesModule],
})
export class ApiServicesModule {}
