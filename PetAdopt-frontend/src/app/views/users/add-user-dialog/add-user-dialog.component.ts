import { Component, OnInit, Inject } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UsersEntity } from 'src/app/domain/external/users.entity';
import { DatePipe } from '@angular/common';
import { Role } from 'src/app/domain/enums/role.enum';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  private _isUpdate = false;
  private _isAdd = false;
  private _isSignUp = false;
  private _inputForm: FormGroup;
  private _newUser: UsersEntity;
  private _userRole = Role.USER;
  hide = true;


  constructor(private usersService: UsersService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddUserDialogComponent>,
    // tslint:disable-next-line:align
    @Inject(MAT_DIALOG_DATA) public data: { title: string, user: UsersEntity }) {
    this.createForm();
  }
  ngOnInit(): void {
    if (this.data.title === 'update user') {
      this._isUpdate = true;
      this.fillFormWithData();
    }
    else if (this.data.title === 'add user') {
      this._isAdd = true;
    }
    else if (this.data.title === 'sign up') {
      this._isSignUp = true;
    }
  }

  getInputForm() {
    return this._inputForm;
  }

  getIsUpdate() {
    return this._isUpdate;
  }

  getIsSignUp() {
    return this._isSignUp;
  }
  getIsAdd() {
    return this._isAdd;
  }

  hideAddDialog() {
    this._inputForm.reset();
    this.dialogRef.close();
  }

  fillFormWithData() {
    this._inputForm.get('name').setValue(this.data.user.name);
    this._inputForm.get('surname').setValue(this.data.user.surname);
    this._inputForm.get('role').setValue(this.data.user.role);
    this._inputForm.get('login').setValue(this.data.user.login);
    this._inputForm.get('password').setValue(this.data.user.password);
  }

  createForm() {
    this._inputForm = this.formBuilder.group({
      name: ['', [Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
      ]],
      surname: ['', [Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20)
      ]],
      login: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      role: [''],
      passwordConfirmed: ['']
    });
  }



  postUser() {
    const date = new Date();
    this._newUser = new UsersEntity();
    this._newUser.setNew(
      this._inputForm.get('name').value,
      this._inputForm.get('surname').value,
      this.dateConverter(date),
      this._inputForm.get('role').value ? this._inputForm.get('role').value : Role[this._userRole],
      this._inputForm.get('login').value,
      this._inputForm.get('password').value);

    this.usersService.postNewUser(this._newUser).subscribe();
    console.log(this._newUser);
    this.dialogRef.close();
  }

  putUser() {
    this._newUser = new UsersEntity();
    this._newUser.setNew(
      this._inputForm.get('name').value,
      this._inputForm.get('surname').value,
      this.data.user.createdAt,
      this._inputForm.get('role').value ? this._inputForm.get('role').value : Role[this._userRole],
      this._inputForm.get('login').value,
      this._inputForm.get('password').value);
    this._newUser.setId(this.data.user.id);
    this.usersService.putUser(this._newUser).subscribe();
    console.log(this._newUser);
    this.dialogRef.close();
  }

  dateConverter(date: Date) {
    const datepipe = new DatePipe('en-US');
    return datepipe.transform(date, 'yyyy-MM-dd');
  }

  signUpPossible(): boolean {
    if (this._inputForm.valid) {
      if (this.passwordsMatch()) {
        return true;
      }
      return false;
    }
    return false;
  }

  passwordsMatch() {
    if (this._inputForm.get('password').value === this._inputForm.get('passwordConfirmed').value) {
      this._inputForm.get('passwordConfirmed').setErrors(null);
      return true;
    }
    else {
      this._inputForm.get('passwordConfirmed').setErrors({incorrect: true});
      return false;
    }
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      console.log('enter');
      document.getElementById('confirmButton').click();
    }
  }
}
