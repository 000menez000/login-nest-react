import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('roles')
export class RolesEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ nullable: false })
    roleName:string;

    @CreateDateColumn()
    created_at:Date;

    @UpdateDateColumn()
    updated_at:Date;
};
