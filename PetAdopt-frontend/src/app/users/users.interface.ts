import { Role } from 'src/app/enums/role.enum';
export interface UsersInterface {
    id: number;
    fullName: string;
    createdAt: Date;
    givenRole: Role;
    login: string;
    pass: string;
}


