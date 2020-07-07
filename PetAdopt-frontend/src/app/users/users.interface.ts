export interface UsersInterface {
    id: number;
    fullName: string;
    createdAt: Date;
    givenRole: Role;
    login: string;
    pass: string;
}

enum Role{
    ADMIN,
    EMPLOYEE,
    USER
}
