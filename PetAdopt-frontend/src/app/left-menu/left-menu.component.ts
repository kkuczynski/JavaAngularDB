import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  private isAdmin = true;
  private isEmployee = true;
  private isShown = false;
  constructor() { }

  onMouseOverLeft() {
      console.log('mouse on bar');
      document.getElementById('menu').hidden = false;
      document.getElementById('leftBar').hidden = true;
      this.isShown = true;
  }

  onMouseOverRight() {
    if (this.isShown) {
      console.log('mouse on invisible bar');
      document.getElementById('menu').hidden = true;
      document.getElementById('leftBar').hidden = false;
      this.isShown = false;
    }
  }


  ngOnInit(): void {
     document.getElementById('menu').hidden = true;
  }

  getIsAdmin(){
    return this.isAdmin;
  }

  getIsEmployee(){
    return this.isEmployee;
  }

  getIsShown(){
    return this.isShown;
  }

  setIsAdmin(isAdmin: boolean){
    this.isAdmin = isAdmin;
  }

}
