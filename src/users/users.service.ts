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
    console.log(createUserDto);
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.surname = createUserDto.surname;
    newUser.email = createUserDto.email;
    newUser.role = createUserDto.role;
    newUser.phoneNumber = createUserDto.phoneNumber;
    newUser.status = createUserDto.status;
    newUser.hireDate = createUserDto.hireDate;
    newUser.manager = createUserDto.manager;
    newUser.salary = createUserDto.salary;
    newUser.employmentType = createUserDto.employmentType;
    newUser.notes = createUserDto.notes;
    

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