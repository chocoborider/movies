import { Module } from '@nestjs/common';
import { AppController, MovieController, UserController } from './controllers';
import { ConfigModule } from '@nestjs/config';
import { MovieUseCasesModule } from './useCases/movie/movie-use-cases.module';
import { UserUseCasesModule } from './useCases/user/user-use-cases.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    UserUseCasesModule,
    MovieUseCasesModule,
  ],
  controllers: [AppController, UserController, MovieController],
  providers: [],
})
export class AppModule {}
