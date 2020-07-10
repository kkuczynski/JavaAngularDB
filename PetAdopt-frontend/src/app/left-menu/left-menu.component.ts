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

  showButton(picked)
  {
    for (let i = 1; i < 5; i++) {
      if (i === picked){
        document.getElementById('butt' + i).style.width = '60%';
        document.getElementById('butt' + i).style.fontSize = '240%';
      }
      else{
        document.getElementById('butt' + i).style.width = '30%';
        document.getElementById('butt' + i).style.fontSize = '90%';
      }
    }
  }

  onMouseOver(picked: number) {
    console.log('mouse on button' + picked);
    switch (picked) {
      case 1:
        this.showButton(picked);
        break;
      case 2:
        this.showButton(picked);
        break;
      case 3:
        this.showButton(picked);
        break;
      case 4:
        this.showButton(picked);
        break;
    }
  }

  onMouseOverRight() {
    console.log('mouse on invisible bar');
    for (let i = 1; i < 5; i++) {
      document.getElementById('butt' + i).style.width = '30%';
      document.getElementById('butt' + i).style.fontSize = '90%';
    }
  }



  ngOnInit(): void {

  }

  getIsAdmin() {
    return this.isAdmin;
  }

  getIsEmployee() {
    return this.isEmployee;
  }

  getIsShown() {
    return this.isShown;
  }

  setIsAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin;
  }

}
