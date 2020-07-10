import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private date = new Date();
  private logged = false;
  private isAdmin = false;
  private isEmployee = false;
  private username = '';
  private password = '';
  private capsWarn = '';
  private loginWarn = '';
  private inputForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.inputForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.minLength(5), Validators.maxLength(20)],
      password: ['', Validators.required, Validators.minLength(5), Validators.maxLength(20)]
    });
  }

  getInputForm() {
    return this.inputForm;
  }

  getLogged() {
    return this.logged;
  }

  setLogged(logged: boolean) {
    this.logged = logged;
  }

  getLoginWarn() {
    return this.loginWarn;
  }

  getCapsWarn() {
    return this.capsWarn;
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      document.getElementById('signInButton').click();
    }
  }
  capsFunction(event) {
    if (event.getModifierState('CapsLock')) {
      this.capsWarn = 'CapsLock is on!';
    }
    else {
      this.capsWarn = '';
    }
  }
  // angularowe formsy ?
  loggedAsAdmin() {
    this.isAdmin = true;
    this.isEmployee = true;
  }

  signIn() {
    this.username = this.inputForm.get('username').value;
    this.password = this.inputForm.get('password').value;
    console.log('login: ' + this.inputForm.get('username').value);
    console.log('pass: ' + this.inputForm.get('username').value);
    this.logged = true;
    this.loggedAsAdmin();
  }

  signUp() {

  }
  signOut() {
    this.logged = false;
    this.isAdmin = false;
    this.isEmployee = false;
  }

}
