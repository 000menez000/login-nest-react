import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { hash } from 'bcrypt';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
    ) {};

    async findAll():Promise<UsersEntity[]> {
        return this.usersRepository.find();
    };

    async findOne(id:number):Promise<UsersEntity | null> {
        return this.usersRepository.findOneBy({ id });
    };

    async createUser(createUserDto:CreateUserDto):Promise<UsersEntity> {
        const saltOrRounds = 10;
        const passwordHashed = await hash(createUserDto.password, saltOrRounds);

        return this.usersRepository.save({
            ...createUserDto,
            password: passwordHashed,
        });
    };
}
