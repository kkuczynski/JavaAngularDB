import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UsersExternal } from 'src/app/domain/external/users.external';
import { AddUserDialogComponent } from '../users/add-user-dialog/add-user-dialog.component';
import { MatDialog } from '@angular/material';
import { AddHouseDialogComponent } from '../adoption-houses/add-house-dialog/add-house-dialog.component';
import { AdoptionHousesExternal } from 'src/app/domain/external/adoption-houses.external';
import { AdoptionHousesService } from 'src/app/services/adoption-houses.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  private _logged: UsersExternal = null;
  private _houses: AdoptionHousesExternal[] = [];
  private _editedHouse: AdoptionHousesExternal;
  private _loggedAs: string = null;

  constructor(
    private loginService: LoginService,
    private housesService: AdoptionHousesService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.redirectToMain();
    this.setLogged();
    this.getHousesService();
    this.router.navigateByUrl('blank');
    this.router.navigateByUrl('settings');
  }
  setLogged() {
    this._logged = this.loginService.user;
    this._loggedAs = this.loginService.role;
  }

  redirectToMain() {
    if (this.loginService.role === 'UNSET') {
      this.router.navigateByUrl('pets');
    }
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(AddUserDialogComponent, {
      minWidth: '30%',
      data: {
        title: 'update user',
        user: this._logged
      }
    });
    dialogRef.afterClosed().subscribe();
  }

  openAddHouseDialog() {
    const dialogRef = this.dialog.open(AddHouseDialogComponent, {
      minWidth: '30%',
      data: { title: 'add house', ownerId: this._logged.id }
    });
    dialogRef.afterClosed().subscribe(() => {
        this.fetchData();
    });
  }

  openEditHouseDialog() {
    const houseId = this.getHouseIdByUserId(this._logged.id);
    this._editedHouse = this.getHouseById(houseId);
    const dialogRef = this.dialog.open(AddHouseDialogComponent, {
      minWidth: '30%',
      data: { title: 'edit house', house: this._editedHouse, ownerId: this._logged.id }
    });
    dialogRef.afterClosed().subscribe();
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
    this.housesService.getAllHouses().subscribe(data => {
      this._houses = data;
    });
  }

  checkHasHome(): boolean {
    this.redirectToMain();
    let returnedBool = false;
    this._houses.forEach(house => {
      if (this._logged.id === house.userId) {
        returnedBool = true;
      }
    });
    return returnedBool;
  }
}

