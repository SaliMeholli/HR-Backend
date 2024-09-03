import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn() 
    id:Number;

    @Column() 
    name: string;
  
    @Column()
    surname: string;

    @Column()
    email: string;
    
    @Column()
    role: string;
    
    @Column()
    phoneNumber: string;

    @Column()
    address: string;
    
    @Column()
    department: string;

    @Column()
    status: string;

    @Column()
    hireDate: string;

    @Column()
    manager: string;

    @Column()
    salary: string;

    @Column()
    employmentType: string;

    @Column()
    notes: string;
   
}