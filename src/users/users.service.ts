import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];
  getUsers() {
    return this.users;
  }
  getUser(index: string) {
    return this.users[index];
  }
  createUser(createUserDto: CreateUserDto) {
    this.users.push(createUserDto);
    return `${createUserDto.username} ${createUserDto.email} Kullanıcısı Eklendi`;
  }
  updateUser(index: string, updateUserDto: UpdateUserDto) {
    this.users[index] = updateUserDto;
    return 'Kullanıcı Güncellendi';
  }
  deleteUser(index: number) {
    this.users.splice(index, 1);
    return 'Kullanıcı Silindi';
  }
}
