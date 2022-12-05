import { User } from '../entities';

export class UserResponseDto {
  success: boolean;

  user: User;
}
