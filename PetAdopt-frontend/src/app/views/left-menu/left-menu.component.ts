import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  private _isAdmin = true;
  private _isEmployee = true;
  private _buttonTextEnabled;

  constructor(private router: Router) { }

  ngOnInit(): void {

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
