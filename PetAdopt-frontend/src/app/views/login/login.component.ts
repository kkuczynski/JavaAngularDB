import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

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
  private signInButton = false;
  private usernameCorrect = true;
  private passwordCorrect = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.inputForm = this.formBuilder.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]]
    });
  }

  getPassordCorrect() {
    if (!this.inputForm.get('password').valid && this.inputForm.get('password').value.length > 0) {
      this.passwordCorrect = false;
      return this.passwordCorrect;
    }
    else {
      this.passwordCorrect = true;
    }
  }

  getUsernameCorrect() {
    if (!this.inputForm.get('username').valid && this.inputForm.get('username').valueChanges) {
      this.usernameCorrect = false;
      return this.usernameCorrect;
    }
    else {
      this.usernameCorrect = true;
    }
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
    } else {
      this.capsWarn = '';
    }
  }

  loggedAsAdmin() {
    this.isAdmin = true;
    this.isEmployee = true;
  }

  signIn() {
    this.username = this.inputForm.get('username').value;
    this.password = this.inputForm.get('password').value;
    //  console do wywalenia
    console.log('login: ' + this.inputForm.get('username').value);
    console.log('pass: ' + this.inputForm.get('password').value);
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

  underlineField(fieldName): boolean {
    if (!this.inputForm.get(fieldName).valid && this.inputForm.get(fieldName).value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
