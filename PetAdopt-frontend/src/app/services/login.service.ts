import { Injectable } from '@angular/core';
import { Role } from '../domain/enums/role.enum';
import { Observable, Observer } from 'rxjs';
import { UsersExternal } from '../domain/external/users.external';
import { RouteConfigLoadEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  role: Role = Role.USER;
  update: Observable<string>;
  observer: Observer<string>;
  user: UsersExternal = null;

  constructor() {
    // czemu to w konsturktorze? i WTF
    this.update = Observable.create((observer: Observer<string>) => {
      this.observer = observer;

    });
  }

  updateCurrentRole(role: Role) {
    this.role = role;
  }

  updateCurrentUser(user: UsersExternal) {
    this.user = user;
  }
}
