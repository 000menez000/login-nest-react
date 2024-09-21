import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
    ) {};

    findAll():Promise<UsersEntity[]> {
        return this.usersRepository.find();
    };

    findOne(id:number):Promise<UsersEntity | null> {
        return this.usersRepository.findOneBy({ id });
    };

    createUser():Promise<UsersEntity> {
        return;
    };
}
