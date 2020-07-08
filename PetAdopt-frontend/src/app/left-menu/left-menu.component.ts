import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {
  public admin = true;
  public employee = true;
  constructor() { }

  onMouseOverLeft(){
    console.log('mouse on bar');
}

onMouseOverRight(){
  console.log('mouse on invisible bar');
}
  public showMenu() {
  console.log('showmenu');
}
  public hideMenu() {
  console.log('hidemenu');
}

ngOnInit(): void {
}

}
