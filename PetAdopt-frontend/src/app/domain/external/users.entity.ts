import { Role } from '../enums/role.enum';
export class UsersEntity {
    id: number;
    name: string;
    surname: string;
    createdAt: string;
    role: string;
    login: string;
    password: string;

    setNew(name: string, surname: string, createdAt: string, role: string, login: string, password: string) {
        this.name = name;
        this.surname = surname;
        this.createdAt = createdAt;
        this.role = role;
        this.login = login;
        this.password = password;
    }

    setId(id: number) {
        this.id = id;
    }

}


