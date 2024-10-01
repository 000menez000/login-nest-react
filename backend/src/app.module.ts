import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { TypesUserModule } from './types-user/types-user.module';
import { PATH_ENITIES, PATH_MIGRATIONS } from './config';

console.log(PATH_MIGRATIONS);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.LOCAL_HOST,
      port: Number(process.env.LOCAL_PORT),
      username: process.env.LOCAL_USERNAME,
      password: process.env.LOCAL_PASSWORD,
      database: process.env.LOCAL_DATABASE,
      entities: [PATH_ENITIES],
      migrations: [PATH_MIGRATIONS],
      migrationsRun: true,
    }),
    UsersModule,
    RolesModule,
    TypesUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
