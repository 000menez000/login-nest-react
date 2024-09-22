import { Module } from '@nestjs/common';
import { TypesUserService } from './types-user.service';
import { TypesUserController } from './types-user.controller';

@Module({
  providers: [TypesUserService],
  controllers: [TypesUserController]
})
export class TypesUserModule {}
