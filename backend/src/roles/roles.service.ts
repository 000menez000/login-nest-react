import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RolesEntity } from './entity/roles.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RolesService {
    constructor(
        @InjectRepository(RolesEntity) 
        private readonly rolesRepository:Repository<RolesEntity>
    ) {};

    async findAll():Promise<RolesEntity[]> {
        return await this.rolesRepository.find();
    };

    async findOne(roleId):Promise<RolesEntity> {
        const role = await this.rolesRepository.findOne({
            where: {
                id: roleId,
            },
        });

        if (!role) {
            throw new NotFoundException(`roleId <${roleId}> not found!`);
        };

        return role;
    };

    async createRole(rolesEntity):Promise<RolesEntity> {
        return await this.rolesRepository.save({
            ...rolesEntity,
        });
    }
}
