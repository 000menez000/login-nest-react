import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto'


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
    };

    @Post('create-user')
    async createUser(@Body() createUser:CreateUserDto):Promise<CreateUserDto> {
        return await this.usersService.createUser(createUser);
    };
};
