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

  private _isAdmin = true;
  private _isEmployee = true;
  private _buttonTextEnabled;
  private _loggedAs;
  private _user: UsersExternal = null;

  constructor(private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
    this._loggedAs = this.loginService.role;
    this._user = this.loginService.user;
  }

  someoneIsLogged() {
    if (this._user) {
      return true;
    } else {
      return false;
    }
  }

  getLoggedAs() {
    this.ngOnInit();
    return this._loggedAs;
  }

  onMouseLeave(picked){
    document.getElementById('butt' + picked).style.minWidth = '22%';
    this._buttonTextEnabled = 0;
  }

  onMouseEnter(picked)
  {
    this._buttonTextEnabled = picked;
    document.getElementById('butt' + picked).style.minWidth = 'fit-content';
  }

  checkRoute(route: string){
    if (this.router.url === route) {
      return true;
     }
     else {
       return false;
     }
  }

  getButtonTextEnabled(){
    return this._buttonTextEnabled;
  }

  getIsAdmin() {
    return this._isAdmin;
  }

  getIsEmployee() {
    return this._isEmployee;
  }

  setIsAdmin(isAdmin: boolean) {
    this._isAdmin = isAdmin;
  }

}
