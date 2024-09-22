import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto'
import { ReturnUserDto } from './dto/returnUser.dto';
import CustomizeReturn from 'src/common/decorators/customizeReturn';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {};

    @Get()
    @CustomizeReturn(ReturnUserDto)
    async findAll():Promise<UsersEntity[]> {
        return await this.usersService.findAll();
    };

    @Get(':id')
    @CustomizeReturn(ReturnUserDto)
    async findOneBy(@Param('id') id:number):Promise<UsersEntity> {
        return await this.usersService.findOne(id);
    };

    @Post('create-user')
    async createUser(@Body() createUser:CreateUserDto):Promise<CreateUserDto> {
        return await this.usersService.createUser(createUser);
    };
};
