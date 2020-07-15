import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  // pola prywatne zaczynamy od _
  private isAdmin = true;
  private isEmployee = true;
  private buttonTextEnabled;
  constructor() { }

  onMouseLeave(picked) {
    //  nie da się inaczej ? :?
    document.getElementById('butt' + picked).style.minWidth = '22%';
    this.buttonTextEnabled = 0;
  }
  onMouseEnter(picked) {
    this.buttonTextEnabled = picked;
    //  nie da się inaczej ? :?
    document.getElementById('butt' + picked).style.minWidth = 'fit-content';
  }

  ngOnInit(): void {

  }

  getButtonTextEnabled() {
    return this.buttonTextEnabled;
  }
  getIsAdmin() {
    return this.isAdmin;
  }

  getIsEmployee() {
    return this.isEmployee;
  }

  setIsAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

}