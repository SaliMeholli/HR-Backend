// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UsersService {}


import { Injectable } from '@nestjs/common';
// import { CreateProductDto, UpdateProductDto } from './product.dto';
import { InjectRepository } from '@nestjs/typeorm';
// import { Product } from './product.entity
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) { }
  async create(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.password = createUserDto.name;

    return await this.userRepo.save(newUser); 

}
  findAll(): Promise<User[]> {
    return this.userRepo.find(); 
  }
  // findOne(id: string): Promise<User> {
  //   return this.userRepo.findOneBy({ id: id }) 
  // }

  // remove(id: string): string {
  //   this.userRepo.delete({ id: id }); 
  //   return "Product deleted successfully";
  // }
}