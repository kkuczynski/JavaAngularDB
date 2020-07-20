import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { UsersEntity } from 'src/app/domain/external/users.entity';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _users = [];
  private _displayedColumns: string[] = ['no.', 'surname', 'name', 'createdAt', 'role', 'login', 'options'];
  private _confirmation = false;
  private _editedUser: UsersEntity;
  // private dataSource: MatTableDataSource<UsersEntity>;


  constructor(private usersService: UsersService, private route: ActivatedRoute, public dialog: MatDialog) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.getUsersService();
    // this.dataSource = new MatTableDataSource(this._users);
    // console.log(this.dataSource);
    // this. dataSource.sort = this.sort;
  }

  getDisplayedColumns() {
    return this._displayedColumns;
  }
  getUsersService() {
    this.usersService.getAllUsers().subscribe(data => this._users = data);
  }

  getUsers() {
    return this._users;
    // return this.dataSource;
  }

  getUserById(userId): UsersEntity {
    let foundUser: UsersEntity;
    this._users.forEach(user => {
      if (user.id === userId) {
        foundUser = user;
      }
    });
    return foundUser;
  }

  getFullName(user: UsersEntity): string{
    return user.name + ' ' + user.surname;
  }

  openConfirmationDialog(userId: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      minWidth: '10%',
      data: { title: 'delete ' + this.getFullName(this.getUserById(userId)) + '?' }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this._confirmation = dialogResult;
      if (this._confirmation) {
        this.deleteUser(userId);
        this.ngOnInit();
      }
    });
  }

  openEditDialog(userId: number) {
    this._editedUser = this.getUserById(userId);
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      minWidth: '30%',
      data: {title: 'update user',
            user: this._editedUser}
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      minWidth: '30%',
      data: {title: 'add user'}
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  deleteUser(userId: number) {
    this.usersService.deleteUser(userId).subscribe();
    this.ngOnInit();
  }
}
