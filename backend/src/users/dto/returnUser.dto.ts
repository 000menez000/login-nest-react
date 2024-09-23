import { UsersEntity } from "../entities/user.entity";

export class ReturnUserDto {
    id:number;
    username:string;
    email:string;
    active:boolean;

    constructor(usersEntity:UsersEntity) {
        this.id = usersEntity.id;
        this.username = usersEntity.username;
        this.email = usersEntity.email;
        this.active = usersEntity.active;
    };
};