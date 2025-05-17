import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.input';
import { UpdateUserDto } from './dto/update-user.input';
import { UserDocument, Users } from './entities/user.entitiy';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UserDocument>,
  ) {}
  getUsers() {
    return this.userModel.find();
  }
  getUser(id: string) {
    return this.userModel.findById(id);
  }
  createUser(createUserDto: CreateUserDto) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }
  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }
  deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
