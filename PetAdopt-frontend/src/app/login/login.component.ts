import { Component, OnInit, Input } from '@angular/core';
import * as globals from 'globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public date = new Date();
  public logged = false;
  public isAdmin = false;
  public isEmplyee = false;
  public username = '';
  public password = '';
  loggedAsAdmin(){
    globals.isAdmin = true;
    globals.isEmpoee = true;
  }
  constructor() { }
  signIn(givenUsername, givenPassword) {
    console.log('login: ' + givenUsername);
    console.log('pass: ' + givenPassword);
    this.username = givenUsername;
    this.password = givenPassword;
    this.logged = true;
    this.loggedAsAdmin();
  }
  signUp() {

  }
  signOut() {
    this.logged = false;
  }
  ngOnInit() {
  }

}
