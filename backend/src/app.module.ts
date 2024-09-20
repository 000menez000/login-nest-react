import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as path from 'path';


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
      entities: [path.resolve(__dirname, '**', '*.entity{.ts,.js}')],
      migrations: [],
      migrationsRun: false,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
