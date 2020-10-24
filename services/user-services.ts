import { User } from '../models/User';
import { UserRepository } from '../repository/UserRepository';

class Service {

  async findAll() {
    const request = await UserRepository.find();
    return request;
  }

  async findAllUser(page?: number, pegeNumber?: number) {
    const request = await UserRepository.find().sort({created_at: -1})
    .skip((page - 1) * pegeNumber)
    .limit(pegeNumber)
    .sort({createdAt : -1});
    return request;
  }


  async findByUserId(_id: string) {
    const data = await UserRepository.findById({ _id: _id});
    return data;
  }

  async createUser(user: User) {
    const userRequest = await UserRepository.create(user);
    return userRequest;
  }

  async updateUser(id: string, user: User) {
    const userUpdate = UserRepository.findByIdAndUpdate(id, user);
    return userUpdate;
  }

  async deleteUser(id: string) {
    const user = await UserRepository.findByIdAndDelete(id);
    return user;
  }
  
}

export const UserService = new Service();