import { Body, Controller, Param, Patch, Post, Put } from '@nestjs/common';
import { UserUseCases } from '../useCases/user/user.use-case';
import { UserResponseDto } from '../core/dtos/user-response.dto';
import { CreateUserDto, UpdateUserDto } from '../core/dtos/create-user.dto';
import { UserFactoryService } from '../useCases/user/user-factory.service';

@Controller('api/user')
export class UserController {
  constructor(
    private userUseCases: UserUseCases,
    private userFactoryService: UserFactoryService,
  ) {}

  @Post()
  async createUser(@Body() userDto: CreateUserDto): Promise<UserResponseDto> {
    const userResponse = new UserResponseDto();

    try {
      const user = this.userFactoryService.createNewUser(userDto);
      const userCreated = await this.userUseCases.createUser(user);

      userResponse.success = true;
      userResponse.user = userCreated;
    } catch (error) {
      userResponse.success = false;
    }

    return userResponse;
  }

  @Patch(':id')
  async updateUser(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const userResponse = new UserResponseDto();
    try {
      const user = await this.userUseCases.updateUser(userId, updateUserDto);

      userResponse.success = true;
      userResponse.user = user;
    } catch (error) {
      userResponse.success = false;
    }

    return userResponse;
  }
}
