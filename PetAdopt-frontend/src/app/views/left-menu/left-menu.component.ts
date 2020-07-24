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
  private _buttonTextEnabled: number;
  private _loggedAs: string;
  private _user: UsersExternal = null;

  constructor(private router: Router, public loginService: LoginService) { }

  ngOnInit(): void {
  }

  setLogged() {
    this._loggedAs = this.loginService.role;
    this._user = this.loginService.user;
  }
  someoneIsLogged(): boolean {
    if (this._user) {
      return true;
    } else {
      return false;
    }
  }

  getLoggedAs(): string {
    this.setLogged();
    return this._loggedAs;
  }

  onMouseLeave(picked: number) {
    document.getElementById('butt' + picked).style.minWidth = '22%';
    this._buttonTextEnabled = 0;
  }

  onMouseEnter(picked: number) {
    this._buttonTextEnabled = picked;
    document.getElementById('butt' + picked).style.minWidth = 'fit-content';
  }

  checkRoute(route: string): boolean {
    if (this.router.url === route) {
      return true;
    }
    else {
      return false;
    }
  }

  getButtonTextEnabled(): number {
    return this._buttonTextEnabled;
  }
}
