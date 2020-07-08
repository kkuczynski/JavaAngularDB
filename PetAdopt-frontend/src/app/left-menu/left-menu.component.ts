import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  public admin = true;
  public employee = true;
  public isShown = false;
  constructor() { }

  onMouseOverLeft() {
  
      console.log('mouse on bar');
      document.getElementById('menu').hidden = false;
      document.getElementById('leftBar').style.transform = 'translate(700%,0%)';
      this.isShown = true;

  }

  onMouseOverRight() {
    if (this.isShown) {
      console.log('mouse on invisible bar');
      document.getElementById('menu').hidden = true;
      document.getElementById('leftBar').style.transform = 'translate(0%,0%)';
      this.isShown = false;
    }
  }


  ngOnInit(): void {
    document.getElementById('menu').hidden = true;
  }

}
