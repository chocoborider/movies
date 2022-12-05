import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../../core/dtos/create-user.dto';
import { User } from '../../core';

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto): User {
    const newUser = new User();
    newUser.id = createUserDto.id;
    newUser.name = createUserDto.name;

    return newUser;
  }
  updateUser(updateUserDto: UpdateUserDto) {
    const newUser = new User();
    newUser.id = updateUserDto.id;
    newUser.name = updateUserDto.name;

    return newUser;
  }
}
