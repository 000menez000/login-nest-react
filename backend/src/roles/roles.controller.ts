import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { RolesEntity } from './entity/roles.entity';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private readonly rolesService:RolesService) {};

    @Get()
    async findAll():Promise<RolesEntity[]> {
        return await this.rolesService.findAll();
    };

    @Get(':id')
    async findOne(@Param('id') roleId:number):Promise<RolesEntity> {
        return await this.rolesService.findOne(roleId);
    }

    @Post('create-role')
    async createRole(@Body() createRole:RolesEntity):Promise<RolesEntity> {
        return await this.rolesService.createRole(createRole);    
    };  
}
