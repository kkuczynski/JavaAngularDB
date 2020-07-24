import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PetsExternal } from '../../../domain/external/pets.external';
import { UsersExternal } from '../../../domain/external/users.external';
import { UsersService } from '../../../services/users.service';
import { AdoptionHousesService } from '../../../services/adoption-houses.service';
import { PetsService } from '../../../services/pets.service';
import { AdoptionHousesExternal } from '../../../domain/external/adoption-houses.external';
import { Names } from '../../../domain/structs/names.class';
import { Assigment } from '../../../domain/structs/assigment.class';


@Component({
  selector: 'app-assign-house-dialog',
  templateUrl: './assign-house-dialog.component.html',
  styleUrls: ['./assign-house-dialog.component.css']
})
export class AssignHouseDialogComponent implements OnInit {

  private _houses: AdoptionHousesExternal[] = [];
  private _newPet: PetsExternal;
  private _displayedColumns: string[] = ['no.', 'city', 'postcode', 'address', 'owner', 'options'];
  private _names: Names[] = [];
  private _houseId: number;
  private _pets: PetsExternal[] = [];
  private _assigments: Assigment[] = [];

  constructor(
    private housesService: AdoptionHousesService,
    private petsService: PetsService,
    private usersService: UsersService,
    public dialogRef: MatDialogRef<AssignHouseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PetsExternal) { }

  ngOnInit(): void {
    this.getHousesService();
    this.getPetsService();
  }

  hideAssignDialog() {
    this.dialogRef.close();
  }

  getHouses(): AdoptionHousesExternal[] {
    return this._houses;
  }

  getHousesService() {
    this.housesService.getAllHouses().subscribe(data => {
      this._houses = data;
      this.fillNames();
      this.fillAssigments();
    });
  }

  getPetsService() {
    this.petsService.getAllPets().subscribe(data => {
      this._pets = data;
    });
  }

  getAssigment(id: number): Assigment {
    let returnedAssigment;
    this._assigments.forEach(assigment => {
      if (assigment.houseId === id) {
        returnedAssigment = assigment;
      }
    });
    return returnedAssigment;
  }

  updateAssigment(id: number, add: number) {
    this._assigments.forEach(assigment => {
      if (assigment.houseId === id) {
        if (add > 0) {
          assigment.assigned = true;
        }
        else if (add < 0) {
          assigment.assigned = false;
        }
      }
    });
  }

  getName(id: number) {
    let returnedName;
    this._names.forEach(name => {
      if (name.id === id) {
        returnedName = name.fullname;
        return returnedName;
      }
    });
    return returnedName;
  }

  getDisplayedColumns() {
    return this._displayedColumns;
  }

  assignHome(houseId) {
    this._houseId = houseId;
    this.updateAssigment(houseId, 1);
  }

  unassignHome(houseId) {
    this._houseId = -1;
    this.updateAssigment(houseId, -1);
  }

  getOwnerFullName(userId: number) {
    this.usersService.getUser(userId).subscribe((user: UsersExternal) => {
      const namesObj = new Names();
      namesObj.fullname = user.name + ' ' + user.surname;
      namesObj.id = userId;
      this._names.push(namesObj);
    });
  }

  checkIsAssigned(houseId): boolean {
    if (this.data.houseId === houseId) {
      return true;
    }
    else {
      return false;
    }
  }

  reload() {
    this.ngOnInit();
  }

  fillNames() {
    if (this._houses) {
      this._houses.forEach(house => {
        this.getOwnerFullName(house.userId);
      });
    }
  }

  fillAssigments() {
    if (this._houses) {
      this._houses.forEach(house => {
        const assigmentObj = new Assigment();
        assigmentObj.houseId = house.id;
        assigmentObj.assigned = this.checkIsAssigned(house.id);
        this._assigments.push(assigmentObj);
      });
    }
  }

  putPet() {
    this._newPet = this.data;
    this._newPet.houseId = this._houseId;
    this.petsService.putPet(this._newPet).subscribe();
    this.dialogRef.close();
  }
}


