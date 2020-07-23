import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddUserDialogComponent } from '../users/add-user-dialog/add-user-dialog.component';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';
import { UsersExternal } from 'src/app/domain/external/users.external';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private _logged = false;

  private _username: string;
  private _password: string;
  private _capsWarn: string;
  private _loginWarn: string;
  private _inputForm: FormGroup;
  private _signedUser: UsersExternal;

  constructor(
    public loginService: LoginService,
    private router: Router,
    private usersService: UsersService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog) {
    this.createForm();
  }

  ngOnInit(){}

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

  getInputForm(): FormGroup {
    return this._inputForm;
  }

  getLogged(): boolean {
    return this._logged;
  }

  setLogged(logged: boolean) {
    this._logged = logged;
  }

  getLoginWarn(): string  {
    return this._loginWarn;
  }

  getCapsWarn(): string {
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
      this.router.navigateByUrl('pets');
    });
  }

}
