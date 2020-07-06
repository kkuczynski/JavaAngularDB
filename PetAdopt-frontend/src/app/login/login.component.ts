import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public logged = false;
  public username = '';
  public password = '';
  constructor() { }
  signIn(givenUsername, givenPassword) {
    console.log('login: ' + givenUsername);
    console.log('pass: ' + givenPassword);
    this.username = givenUsername;
    this.password = givenPassword;
    this.logged = !this.logged;
  }
  signUp() {

  }
  ngOnInit() {
  }

}
