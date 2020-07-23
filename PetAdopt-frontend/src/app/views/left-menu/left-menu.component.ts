import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsersExternal } from 'src/app/domain/external/users.external';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  // HALO TYP zwracany
  private _isAdmin = true;
  // HALO TYP zwracany
  private _isEmployee = true;
  // HALO TYP zwracany
  private _buttonTextEnabled;
  // HALO TYP zwracany
  private _loggedAs;
  private _user: UsersExternal = null;

  constructor(private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this._loggedAs = this.loginService.role;
    this._user = this.loginService.user;
  }
  // HALO TYP zwracany
  someoneIsLogged() {
    if (this._user) {
      return true;
    } else {
      return false;
    }
  }
  // HALO TYP zwracany
  getLoggedAs() {
    // ngOnInit
    this.ngOnInit();
    return this._loggedAs;
  }

  onMouseLeave(picked) {
    //  nie da się inaczej ? :? dalej nie da się ?
    document.getElementById('butt' + picked).style.minWidth = '22%';
    this._buttonTextEnabled = 0;
  }

  onMouseEnter(picked) {
    this._buttonTextEnabled = picked;
    //  nie da się inaczej ? :? dalej nie da się ?
    document.getElementById('butt' + picked).style.minWidth = 'fit-content';
  }
  // HALO TYP zwracany
  checkRoute(route: string) {
    if (this.router.url === route) {
      return true;
    }
    else {
      return false;
    }
  }
  // HALO TYP zwracany
  getButtonTextEnabled() {
    return this._buttonTextEnabled;
  }
  // HALO TYP zwracany
  getIsAdmin() {
    return this._isAdmin;
  }
  // HALO TYP zwracany
  getIsEmployee() {
    return this._isEmployee;
  }
  // HALO TYP zwracany
  setIsAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }

}
