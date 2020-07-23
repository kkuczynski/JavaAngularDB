import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUserDialogComponent } from '../users/add-user-dialog/add-user-dialog.component';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';
import { UsersExternal } from 'src/app/domain/external/users.external';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { LeftMenuComponent } from '../left-menu/left-menu.component';

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
  private _signedUser: UsersExternal;

  // tslint:disable-next-line:max-line-length
  constructor(public loginService: LoginService, private router: Router, private usersService: UsersService, private formBuilder: FormBuilder, public dialog: MatDialog) {
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
    this.usersService.loginUser(this._username, this._password).subscribe((user: any) => {
      this._signedUser = user;
      if (this._signedUser) {
        this.loginService.updateCurrentRole(this._signedUser.role);
        this.loginService.updateCurrentUser(this._signedUser);
        this._loginWarn = '';
        this._logged = true;
        this.router.navigateByUrl('pets');
      } else {
        this._loginWarn = 'Incorrect username or password';
      }
    });
  }

  signOut() {
    this._logged = false;
    this.loginService.role = null;
    this.loginService.user = null;
    this.router.navigateByUrl('pets');
  }

  openSignUpDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      minWidth: '30%',
      data: { title: 'sign up' }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

}
