import { Module } from '@nestjs/common';
import { MovieUseCases } from './movie-use-case';
import { ApiServicesModule } from '../../services/api-services/api-services.module';
import { MovieFactoryService } from './movie-factory.service';
import { DataServicesModule } from '../../services/data-services/data-services.module';

@Module({
  imports: [ApiServicesModule, DataServicesModule],
  providers: [MovieUseCases, MovieFactoryService],
  exports: [MovieUseCases, MovieFactoryService],
})
export class MovieUseCasesModule {}
