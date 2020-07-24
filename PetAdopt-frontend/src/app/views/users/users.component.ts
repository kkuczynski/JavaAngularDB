import { Component, OnInit, ViewChild, ɵisDefaultChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { UsersExternal } from 'src/app/domain/external/users.external';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AddUserDialogComponent } from './add-user-dialog/add-user-dialog.component';
import { AddHouseDialogComponent } from '../adoption-houses/add-house-dialog/add-house-dialog.component';
import { AdoptionHousesService } from 'src/app/services/adoption-houses.service';
import { AdoptionHousesExternal } from 'src/app/domain/external/adoption-houses.external';
import { LoginService } from 'src/app/services/login.service';
import { Role } from 'src/app/domain/enums/role.enum';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private _users: UsersExternal[] = [];
  private _displayedColumns: string[] = ['no.', 'surname', 'name', 'createdAt', 'role', 'login', 'options'];
  private _confirmation = false;
  private _editedUser: UsersExternal;
  private _houses: AdoptionHousesExternal[] = [];
  private _editedHouse: AdoptionHousesExternal;
  private _loggedAs: string;
  constructor(
    public loginService: LoginService,
    private usersService: UsersService,
    private housesService: AdoptionHousesService,
    public dialog: MatDialog,
    private router: Router,
    private changeDetectorRefs: ChangeDetectorRef) { }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.getUsersService();
    this.getHousesService();
    this.setRole();
    this.redirectToMain();
    this.router.navigateByUrl('blank');
    this.router.navigateByUrl('users');
  }

  getAdmin(): string {
    return Role[Role.ADMIN];
  }

  getEmployee(): string {
    return Role[Role.EMPLOYEE];
  }

  getUser(): string {
    return Role[Role.USER];
  }

  redirectToMain() {
    if (this._loggedAs === this.getUser() || this._loggedAs === null) {
      this.router.navigateByUrl('pets');
    }
  }

  getDisplayedColumns(): string[] {
    return this._displayedColumns;
  }

  getUsersService() {
    this.usersService.getAllUsers().subscribe(data => this._users = data);
  }

  setRole() {
    this._loggedAs = this.loginService.role;
  }

  getLoggedAs(): string {
    return this._loggedAs;
  }

  getUsers(): UsersExternal[] {
    return this._users;
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

  getHouseIdByUserId(userId): number {
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
        this.fetchData();
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
        this.fetchData();
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
      this.fetchData();
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      minWidth: '30%',
      data: { title: 'add user' }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchData();
    });
  }

  openAddHouseDialog(userId: number) {
    const dialogRef = this.dialog.open(AddHouseDialogComponent, {
      minWidth: '30%',
      data: { title: 'add house', ownerId: userId }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchData();
    });
  }

  openEditHouseDialog(userId: number) {
    const houseId = this.getHouseIdByUserId(userId);
    this._editedHouse = this.getHouseById(houseId);
    const dialogRef = this.dialog.open(AddHouseDialogComponent, {
      minWidth: '30%',
      data: { title: 'edit house',  ownerId: userId, house: this._editedHouse, }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchData();
    });
  }

  deleteUser(userId: number) {
    this.usersService.deleteUser(userId).subscribe();
    this.fetchData();
  }

  deleteHouse(userId: number) {
    const houseId = this.getHouseIdByUserId(userId);
    this.usersService.deleteUser(houseId).subscribe();
    this.fetchData();
  }
}
