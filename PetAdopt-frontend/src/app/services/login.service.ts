import { Injectable } from '@angular/core';
import { Role } from '../domain/enums/role.enum';
import { Observable, Observer } from 'rxjs';
import { UsersExternal } from '../domain/external/users.external';
import { RouteConfigLoadEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // czemu jawnie po indexie ?
  role = Role[2];
  update: Observable<string>;
  observer: Observer<string>;
  user: UsersExternal = null;

  constructor() {
    // czemu to w konsturktorze? i WTF
    this.update = Observable.create((observer: Observer<string>) => {
      this.observer = observer;

    });
  }

  // może po elementach
  updateCurrentRole(role: string) {
    if (role === 'ADMIN') {
      this.role = Role[0];
      // Role.ADMIN ??????????????
    }
    else if (role === 'EMPLOYEE') {
      this.role = Role[1];
      // Role.EMPLOYEE ??????????????
    }
    else {
      this.role = Role[2];
      // Role.USER ??????????????
    }
  }

  updateCurrentUser(user: UsersExternal) {
    this.user = user;
  }
}
