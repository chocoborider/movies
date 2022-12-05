import { Injectable } from '@nestjs/common';
import { User } from '../../core';
import { IDataServices } from '../../core/abstracts/data-services.abstract';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos/create-user.dto';
import { UserFactoryService } from './user-factory.service';

@Injectable()
export class UserUseCases {
  constructor(
    private dataServices: IDataServices,
    private userFactoryService: UserFactoryService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userFactoryService.createNewUser(createUserDto);
    const userCreated = await this.dataServices.users.create(user);
    return userCreated;
  }
  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = this.userFactoryService.updateUser(updateUserDto);
    return this.dataServices.users.update(userId, user);
  }
}
