import { Component, OnInit, Input } from '@angular/core';

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
  constructor() { }
  signIn(givenUsername, givenPassword) {
    console.log('login: ' + givenUsername);
    console.log('pass: ' + givenPassword);
    this.username = givenUsername;
    this.password = givenPassword;
    this.logged = true;
  }
  signUp() {

  }
  signOut() {
    this.logged = false;
  }
  ngOnInit() {
  }

}
