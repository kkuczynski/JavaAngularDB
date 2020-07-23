import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { PetsExternal } from 'src/app/domain/external/pets.external';
import { MatDialog } from '@angular/material';
import { AddPetDialogComponent } from './add-pet-dialog/add-pet-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AssignHouseDialogComponent } from './assign-house-dialog/assign-house-dialog.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  private _newPet: PetsExternal;
  private _pets: PetsExternal[];
  // HALO TYP zwracany 
  private _currentDate = new Date();
  // HALO TYP zwracany + trup
  private _month = this._currentDate.getMonth();
  // HALO TYP zwracany + trup
  private _deleteClicked = -1;
  private _editedPet: PetsExternal;
  // HALO TYP zwracany 
  private _confirmation = false;
  // HALO TYP zwracany + trup
  private _role;
  private _loggedAs: string;
  // format
  constructor(private petsService: PetsService, public loginService: LoginService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPetsService();
    this.setRole();
  }

  setRole() {
    this._loggedAs = this.loginService.role;
  }
  // HALO TYP zwracany
  getLoggedAs() {
    return this._loggedAs;
  }
  // HALO TYP zwracany
  getPets() {
    return this._pets;
  }
  // HALO TYP zwracany
  getCurrentDate() {
    return this._currentDate;
  }

  getPetsService() {
    this.petsService.getAllPets().subscribe(data => this._pets = data);
  }

  getPetsServiceConcat() {
    this.petsService.getPetsWithHome().subscribe(data => {
      this._pets = this._pets.concat(data);
    });
  }

  getPetById(petId): PetsExternal {
    let foundPet: PetsExternal;
    this._pets.forEach(pet => {
      if (pet.id === petId) {
        foundPet = pet;
      }
    });
    return foundPet;
  }

  openConfirmationDialog(petId: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      minWidth: '10%',
      data: { title: 'delete ' + this.getPetById(petId).name + '?' }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this._confirmation = dialogResult;
      if (this._confirmation) {
        this.deletePet(petId);
        // inaczej
        this.ngOnInit();
      }
    });
  }

  openEditDialog(petId: number) {
    this._editedPet = this.getPetById(petId);
    const dialogRef = this.dialog.open(AddPetDialogComponent, {
      minWidth: '30%',
      data: this._editedPet
    });
    dialogRef.afterClosed().subscribe(() => {
      // inaczej
      this.ngOnInit();
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddPetDialogComponent, {
      minWidth: '30%',
    });
    dialogRef.afterClosed().subscribe(() => {
      // inaczej
      this.ngOnInit();
    });
  }

  openAssignDialog(petId: number) {
    this._editedPet = this.getPetById(petId);
    const dialogRef = this.dialog.open(AssignHouseDialogComponent, {
      minWidth: '50%',
      data: this._editedPet
    });
    dialogRef.afterClosed().subscribe(() => {
      // inaczej
      this.ngOnInit();
    });
  }


  deletePet(id: number) {
    this.petsService.deletePet(id).subscribe();
    this.ngOnInit();
  }

  compareDates(dateA: Date, days: number, dateB: Date): boolean {
    const newDateA: Date = new Date(dateA);
    const newDateB: Date = new Date(dateB);
    newDateA.setDate(newDateA.getDate() + days);
    if (newDateA > newDateB) {
      return true;
    }
    else {
      return false;
    }
  }

  addDays(date: Date, days: number): Date {
    const newDate: Date = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

}
