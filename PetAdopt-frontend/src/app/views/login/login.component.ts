import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private _date = new Date();
  private _logged = false;
  private _isAdmin = false;
  private _isEmployee = false;
  private _username = '';
  private _password = '';
  private _capsWarn = '';
  private _loginWarn = '';
  private _inputForm: FormGroup;
  private _signInButton = false;
  private _usernameCorrect = true;
  private _passwordCorrect = true;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this._inputForm = this.formBuilder.group({
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
    if (!this._inputForm.get('password').valid && this._inputForm.get('password').value.length > 0) {
      this._passwordCorrect = false;
      return this._passwordCorrect;
    }
    else {
      this._passwordCorrect = true;
    }
  }

  getUsernameCorrect() {
    if (!this._inputForm.get('username').valid && this._inputForm.get('username').valueChanges) {
      this._usernameCorrect = false;
      return this._usernameCorrect;
    }
    else {
      this._usernameCorrect = true;
    }
  }
  getInputForm() {
    return this._inputForm;
  }

  getLogged() {
    return this._logged;
  }

  setLogged(logged: boolean) {
    this._logged = logged;
  }

  getLoginWarn() {
    return this._loginWarn;
  }

  getCapsWarn() {
    return this._capsWarn;
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      document.getElementById('signInButton').click();
    }
  }
  capsFunction(event) {
    if (event.getModifierState('CapsLock')) {
      this._capsWarn = 'CapsLock is on!';
    } else {
      this._capsWarn = '';
    }
  }

  loggedAsAdmin() {
    this._isAdmin = true;
    this._isEmployee = true;
  }

  signIn() {
    this._username = this._inputForm.get('username').value;
    this._password = this._inputForm.get('password').value;
    console.log('login: ' + this._inputForm.get('username').value);
    console.log('pass: ' + this._inputForm.get('password').value);
    this._logged = true;
    this.loggedAsAdmin();
  }

  signUp() {

  }
  signOut() {
    this._logged = false;
    this._isAdmin = false;
    this._isEmployee = false;
  }

  underlineField(fieldName): boolean {
    if (!this._inputForm.get(fieldName).valid && this._inputForm.get(fieldName).value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
