import { Component, OnInit, ViewChild } from '@angular/core';
import { AdoptionHousesEntity } from 'src/app/domain/external/adoption-houses.entity';
import { AdoptionHousesService } from 'src/app/services/adoption-houses.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AddHouseDialogComponent } from './add-house-dialog/add-house-dialog.component';
import { UsersService } from 'src/app/services/users.service';
import { UsersEntity } from 'src/app/domain/external/users.entity';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'houses',
  templateUrl: './adoption-houses.component.html',
  styleUrls: ['./adoption-houses.component.css']
})
export class AdoptionHousesComponent implements OnInit {

  private _houses = [];
  private _displayedColumns: string[] = ['no.', 'city', 'postcode', 'address', 'owner', 'options'];
  private _confirmation = false;
  private _editedHouse: AdoptionHousesEntity;
  private _owner: any;
  // array of full names of houses owners
  private _names: Names[] = [];
  private _fullname;

  constructor(private housesService: AdoptionHousesService, private usersService: UsersService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getHousesService();
  }

  getName(id: number) {
    this._names.forEach(name => {
      if (name.id === id) {
        return name.fullname;
      }
    });
    return '';
  }

  getDisplayedColumns() {
    return this._displayedColumns;
  }
  getHousesService() {
    this.housesService.getAllHouses().subscribe(data => {
      this._houses = data;
      this.fillNames();
    });
  }

  getHouses() {
    return this._houses;
  }

  fillNames() {
    if (this._houses) {
      this._houses.forEach(house => {
        let namesObj = new Names();
        namesObj.fullname = this.getOwnerFullName(house.userId);
        namesObj.id = house.userId;
        this._names.push(namesObj);
      });
      console.log(this._names);
    }
  }

  getHouseById(houseId): AdoptionHousesEntity {
    let foundHouse: AdoptionHousesEntity;
    this._houses.forEach(house => {
      if (house.id === houseId) {
        foundHouse = house;
      }
    });
    return foundHouse;
  }

  getOwnerFullName(userId: number): string{
    this.usersService.getUser(userId).subscribe((user: UsersEntity) => {
      const name = this._fullname = user.name + ' ' + user.surname;
    });
    console.log(name);
    return this._fullname;
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
        this.ngOnInit();
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
      this.ngOnInit();
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddHouseDialogComponent, {
      minWidth: '30%',
      data: { title: 'add house' }
    });
    dialogRef.afterClosed().subscribe(() => {
      this.ngOnInit();
    });
  }

  deleteHouse(houseId: number) {
    this.housesService.deleteHouse(houseId).subscribe();
    this.ngOnInit();
  }
}

export class Names {
  id: number;
  fullname: string;
}
