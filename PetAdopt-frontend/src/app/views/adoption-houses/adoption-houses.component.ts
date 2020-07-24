import { Component, OnInit, ViewChild } from '@angular/core';
import { AdoptionHousesExternal } from 'src/app/domain/external/adoption-houses.external';
import { AdoptionHousesService } from 'src/app/services/adoption-houses.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AddHouseDialogComponent } from './add-house-dialog/add-house-dialog.component';
import { UsersService } from 'src/app/services/users.service';
import { UsersExternal } from 'src/app/domain/external/users.external';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Role } from 'src/app/domain/enums/role.enum';
import { Names } from '../../domain/structs/names.class';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'houses',
  templateUrl: './adoption-houses.component.html',
  styleUrls: ['./adoption-houses.component.css']
})
export class AdoptionHousesComponent implements OnInit {
  private _houses: AdoptionHousesExternal[] = [];
  private _displayedColumns: string[] = ['no.', 'city', 'postcode', 'address', 'owner', 'options'];
  private _confirmation = false;
  private _editedHouse: AdoptionHousesExternal;
  private _names: Names[] = [];
  private _loggedAs;

  constructor(
    private housesService: AdoptionHousesService,
    private loginService: LoginService,
    private usersService: UsersService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.getHousesService();
    this.setRole();
    this.redirectToMain();
    this.router.navigateByUrl('blank');
    this.router.navigateByUrl('houses');
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

  setRole() {
    this._loggedAs = this.loginService.role;
  }

  getLoggedAs(): string {
    return this._loggedAs;
  }

  getName(id: number): string {
    let returnedName;
    this._names.forEach(name => {
      if (name.id === id) {
        returnedName = name.fullname;
      }
    });
    return returnedName;
  }

  getDisplayedColumns(): string[] {
    return this._displayedColumns;
  }

  getHousesService() {
    this.housesService.getAllHouses().subscribe(data => {
      this._houses = data;
      this.fillNames();
    });
  }

  getHouses(): AdoptionHousesExternal[] {
    return this._houses;
  }

  fillNames() {
    if (this._houses) {
      this._houses.forEach(house => {
        this.getOwnerFullName(house.userId);
      });
    }
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

  getOwnerFullName(userId: number) {
    this.usersService.getUser(userId).subscribe((user: UsersExternal) => {
      const namesObj = new Names();
      namesObj.fullname = user.name + ' ' + user.surname;
      namesObj.id = userId;
      this._names.push(namesObj);
    });
  }


  openConfirmationDialog(houseId: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      minWidth: '10%',
      data: { title: 'delete house?' }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this._confirmation = dialogResult;
      if (this._confirmation) {
        this.deleteHouse(houseId);
        this.router.navigateByUrl('houses');
      }
    });
  }

  openEditDialog(houseId: number) {
    this._editedHouse = this.getHouseById(houseId);
    const dialogRef = this.dialog.open(AddHouseDialogComponent, {
      minWidth: '30%',
      data: {
        title: 'update house',
        house: this._editedHouse
      }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigateByUrl('houses');
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddHouseDialogComponent, {
      minWidth: '30%',
      data: { title: 'add house' }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.router.navigateByUrl('houses');
    });
  }

  deleteHouse(houseId: number) {
    this.housesService.deleteHouse(houseId).subscribe();
    this.router.navigateByUrl('houses');
  }
}
