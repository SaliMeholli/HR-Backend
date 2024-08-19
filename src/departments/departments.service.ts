import { Injectable } from '@nestjs/common';
import { Department } from './entities/department.entity';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
    private departments: Department[] = [];
    private idCounter = 1;

    create(createDepartmentDto: CreateDepartmentDto): Department {
        const newDepartment = {
            id: this.idCounter++,
            ...createDepartmentDto,
        };
        this.departments.push(newDepartment);
        return newDepartment;
    }

    findAll(): Department[] {
        return this.departments;
    }

    findOne(id: number): Department {
        return this.departments.find(department => department.id === id);
    }

    update(id: number, updateDepartmentDto: UpdateDepartmentDto): Department{
        const department = this.findOne(id);
        if(department){
            Object.assign(department, updateDepartmentDto);
        }
        return department;
    }

    remove(id: number): void {
        this.departments = this.departments.filter(department => department.id !== id);
    }
}