import { Role } from '../enums/role.enum';
export class UsersExternal {
    id: number;
    name: string;
    surname: string;
    createdAt: string;
    role: string;
    login: string;
    password: string;
    // Nie wiem po co ci to do komunikacji z backendem :?
    setNew(name: string, surname: string, createdAt: string, role: string, login: string, password: string) {
        this.name = name;
        this.surname = surname;
        this.createdAt = createdAt;
        this.role = role;
        this.login = login;
        this.password = password;
    }
    // Nie wiem po co ci to do komunikacji z backendem :?
    setId(id: number) {
        this.id = id;
    }
    // Nie wiem po co ci to do komunikacji z backendem :?
    getFullName() {
        return this.name + ' ' + this.surname;
    }

}



