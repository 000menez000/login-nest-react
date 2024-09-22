import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ nullable: false })
    username:string;

    @Column({ nullable: false })
    email:string;

    @Column({ nullable: false })
    password:string;

    @Column({ nullable: false })
    cpf:string;

    @Column({ nullable: true })
    phone:string;

    @Column({ default:1, nullable: false })
    typeUser_id:number;

    @Column({ default:true, nullable: false })
    active:boolean;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;
};