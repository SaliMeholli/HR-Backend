import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryColumn() 
    id:string;

    @Column() 
    name: string;
  
    @Column()
    password: string;
   
}