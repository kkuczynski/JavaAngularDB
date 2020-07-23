import { Injectable } from '@angular/core';
import { Role } from '../domain/enums/role.enum';
import { Observable, Observer } from 'rxjs';
import { UsersExternal } from '../domain/external/users.external';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  role = Role[2];
  update: Observable<string>;
  observer: Observer<string>;
  user: UsersExternal = null;

  constructor() {
    this.update = Observable.create((observer: Observer<string>) => {
      this.observer = observer;

    });
  }

  updateCurrentRole(role: string){
    if (role === 'ADMIN') {
      this.role = Role[0];
    }
    else if (role === 'EMPLOYEE') {
      this.role = Role[1];
    }
    else {
      this.role = Role[2];
    }
  }

  updateCurrentUser(user: UsersExternal) {
    this.user = user;
  }
}
