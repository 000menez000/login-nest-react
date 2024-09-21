import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/user.entity';
import { get } from 'http';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {};

    @Get()
    async findAll():Promise<UsersEntity[]> {
        return await this.usersService.findAll();
    };

    @Get(':id')
    async findOneBy(@Param('id') id:number):Promise<UsersEntity> {
        return await this.usersService.findOne(id);
    }
};
