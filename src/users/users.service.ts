import { Injectable, HttpCode, NotAcceptableException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-users.dto";
import { UpdateUserDto } from "./dto/update-users.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";
@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) {}
  async create(createUserDto: CreateUserDto) {
    return await this.usersRepository.save(createUserDto);
  }

  async findOneByEmail(email: string) {
    return await this.usersRepository.findOneBy({ email });
  }
  
  private users = [] =[
    {   
        id:1,
        name:"user1",
        email:"qCJp1@example.com",
    }
  ] ;
  getUsers() {
    return this.users;
  }
  getUserId(id: number) {
    const userFound = this.users.find((user) => user.id === id);
    if (!userFound) return new NotAcceptableException("User not found");

    return userFound;
  }
  createUser(users: CreateUserDto) {
    this.users.push({
      ...users,
      id: this.users.length + 1,
    });
    return users;
  }

  updateUser(user: UpdateUserDto) {
    return user;
  }
}
