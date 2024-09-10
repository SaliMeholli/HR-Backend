import { Injectable } from '@nestjs/common';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leave } from './entities/leave.entity';

@Injectable()
export class LeaveService {
  constructor(
    @InjectRepository(Leave)
    private leaveRepository: Repository<Leave>,
  ) {}

  async create(createLeaveDto: CreateLeaveDto): Promise<Leave> {
    const leave = this.leaveRepository.create(createLeaveDto);
    return this.leaveRepository.save(leave);
  }

  async findAll(): Promise<Leave[]> {
    return this.leaveRepository.find();
  }

  async findOne(id: number): Promise<Leave> {
    return this.leaveRepository.findOneBy({ id });
  }

  async update(id: number, updateLeaveDto: UpdateLeaveDto): Promise<Leave> {
    await this.leaveRepository.update(id, updateLeaveDto);
    return this.leaveRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.leaveRepository.delete(id);
  }
}
