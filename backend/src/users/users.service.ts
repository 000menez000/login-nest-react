import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {};

    findAll():Promise<Users[]> {
        return this.usersRepository.find();
    };

    findOne(id:number):Promise<Users | null> {
        return this.usersRepository.findOneBy({ id });
    };

    createUser():Promise<Users> {
        return;
    };
}
