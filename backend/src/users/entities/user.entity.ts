import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column()
    email:string;

    @Column()
    cpf:string;

    @Column()
    phone:string;

    @Column()
    typeUser_id:number;

    @Column({ default:true })
    active:boolean;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;
};