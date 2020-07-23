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
  // trup
  private _date = new Date();
  // HALO TYP zwracany
  private _logged = false;
  // HALO TYP zwracany + trup
  private _isAdmin = false;
  // HALO TYP zwracany + trup
  private _isEmployee = false;
  // HALO TYP zwracany
  private _username = '';
  // HALO TYP zwracany
  private _password = '';
  // HALO TYP zwracany
  private _capsWarn = '';
  // HALO TYP zwracany
  private _loginWarn = '';
  // HALO TYP zwracany
  private _inputForm: FormGroup;
  // HALO TYP zwracany
  private _signInButton = false;
  // HALO TYP zwracany
  private _usernameCorrect = true;
  // HALO TYP zwracany
  private _passwordCorrect = true;
  private _signedUser: UsersExternal;

  // tslint:disable-next-line:max-line-length
  // formatowanie
  constructor(public loginService: LoginService, private router: Router, private usersService: UsersService, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.createForm();
  }
  // po co to w takim razie ? :D
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
  // HALO TYP zwracany i przeanalizuj czy tak powinno być :D
  getPassordCorrect() {
    if (!this._inputForm.get('password').valid && this._inputForm.get('password').value.length > 0) {
      this._passwordCorrect = false;
      return this._passwordCorrect;
    }
    else {
      this._passwordCorrect = true;
    }
  }
  // HALO TYP zwracany i przeanalizuj czy tak powinno być :D
  getUsernameCorrect() {
    if (!this._inputForm.get('username').valid && this._inputForm.get('username').valueChanges) {
      this._usernameCorrect = false;
      return this._usernameCorrect;
    }
    else {
      this._usernameCorrect = true;
    }
  }
  // HALO TYP zwracany 
  getInputForm() {
    return this._inputForm;
  }
  // HALO TYP zwracany 
  getLogged() {
    return this._logged;
  }
  // HALO TYP zwracany 
  setLogged(logged: boolean) {
    this._logged = logged;
  }
  // HALO TYP zwracany 
  getLoginWarn() {
    return this._loginWarn;
  }
  // HALO TYP zwracany 
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
      // spoko tylko to nic nie robi :D
      this.ngOnInit();
    });
  }

}
