import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { UsersExternal } from 'src/app/domain/external/users.external';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { AddHouseDialogComponent } from '../adoption-houses/add-house-dialog/add-house-dialog.component';
import { AdoptionHousesService } from 'src/app/services/adoption-houses.service';
import { AdoptionHousesExternal } from 'src/app/domain/external/adoption-houses.external';
import { LoginService } from 'src/app/services/login.service';



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
  private _editedUser: UsersExternal;
  private _houses: AdoptionHousesExternal[] = [];
  private _editedHouse: any;
  // private dataSource: MatTableDataSource<UsersEntity>;


  // tslint:disable-next-line:max-line-length
  constructor(public loginService: LoginService, private usersService: UsersService, private housesService: AdoptionHousesService, public dialog: MatDialog) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.getUsersService();
    this.getHousesService();
    console.log(this.loginService.role);
    console.log(this.loginService.user);
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

  getUserById(userId): UsersExternal {
    let foundUser: UsersExternal;
    this._users.forEach(user => {
      if (user.id === userId) {
        foundUser = user;
      }
    });
    return foundUser;
  }

  getHouseById(houseId): AdoptionHousesExternal {
    let foundHouse: AdoptionHousesExternal;
    this._houses.forEach(house => {
      if (house.id === houseId) {
        foundHouse = house;
      }
    });
    return foundHouse;
  }

  getHousIdByUserId(userId): number {
    let houseId = -1;
    this._houses.forEach(house => {
      if (house.userId === userId) {
      houseId = house.id;
      }
    });
    return houseId;
  }

  getHousesService() {
    this.housesService.getAllHouses().subscribe(data => this._houses = data);
  }

  getFullName(user: UsersExternal): string {
    return user.name + ' ' + user.surname;
  }

  checkHasHome(userId: number): boolean {
    let returnedBool = false;
    this._houses.forEach(house => {
      if (userId === house.userId) {
        returnedBool = true;
      }
    });
    return returnedBool;
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

  openConfirmationDialogHouse(userId: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      minWidth: '10%',
      // tslint:disable-next-line:quotemark
      data: { title: 'delete ' + this.getFullName(this.getUserById(userId)) + "'s house?" }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this._confirmation = dialogResult;
      if (this._confirmation) {
        this.deleteHouse(userId);
        this.ngOnInit();
      }
    });
  }

  openEditDialog(userId: number) {
    this._editedUser = this.getUserById(userId);
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      minWidth: '30%',
      data: {
        title: 'update user',
        user: this._editedUser
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      minWidth: '30%',
      data: { title: 'add user' }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  openAddHouseDialog(userId: number) {
    const dialogRef = this.dialog.open(AddHouseDialogComponent, {
      minWidth: '30%',
      data: { title: 'add house', ownerId: userId }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  openEditHouseDialog(userId: number) {
    const houseId = this.getHousIdByUserId(userId);
    this._editedHouse = this.getHouseById(houseId);
    const dialogRef = this.dialog.open(AddHouseDialogComponent, {
      minWidth: '30%',
      data: { title: 'edit house', house: this._editedHouse, ownerId: userId }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  deleteUser(userId: number) {
    this.usersService.deleteUser(userId).subscribe();
    this.ngOnInit();
  }

  deleteHouse(userId: number) {
    const houseId = this.getHousIdByUserId(userId);
    this.usersService.deleteUser(houseId).subscribe();
    this.ngOnInit();
  }
}
