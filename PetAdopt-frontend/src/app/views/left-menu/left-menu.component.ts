import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  private _isAdmin = true;
  private _isEmployee = true;
  private _buttonTextEnabled;
  constructor() { }
// TODO: zmienic algorytm
  onMouseLeave(picked){
    document.getElementById('butt' + picked).style.minWidth = '22%';
    this._buttonTextEnabled = 0;
  }
  onMouseEnter(picked)
  {
    this._buttonTextEnabled = picked;
    document.getElementById('butt' + picked).style.minWidth = 'fit-content';
  }

  ngOnInit(): void {

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
