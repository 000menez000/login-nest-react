import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('types-user')
export class TypesUserEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ nullable: false })
    typeName:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;
};