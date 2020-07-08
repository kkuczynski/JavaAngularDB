import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  // public
  public admin = true;
  public employee = true;
  public isShown = false;
  constructor() { }

  onMouseOverLeft() {
  
      console.log('mouse on bar');
            // wtf
      document.getElementById('menu').hidden = false;
            // wtf
      document.getElementById('leftBar').style.transform = 'translate(700%,0%)';
      this.isShown = true;

  }

  onMouseOverRight() {
    if (this.isShown) {
      console.log('mouse on invisible bar');
      // wtf
      document.getElementById('menu').hidden = true;
            // wtf
      document.getElementById('leftBar').style.transform = 'translate(0%,0%)';
      this.isShown = false;
    }
  }


  ngOnInit(): void {
    // wtf
    document.getElementById('menu').hidden = true;
  }

}
