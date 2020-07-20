import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { ActivatedRoute } from '@angular/router';
import { PetsEntity } from 'src/app/domain/external/pets.entity';
import { MatDialog } from '@angular/material';
import { AddPetDialogComponent } from './add-pet-dialog/add-pet-dialog.component';
import { ConfirmationDialogComponent} from '../confirmation-dialog/confirmation-dialog.component';

// this.petsService.postNewPet(this._newPet).subscribe(pet => this._pets.push(pet));

// TODO: zapytac o 4 taby
// TODO: response entity poczytac i cos zwraca, backend
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  private _newPet: PetsEntity;
  private _isAdmin = true;
  private _isEmployee = true;
  private _pets: PetsEntity[];
  private _currentDate = new Date();
  private _month = this._currentDate.getMonth();
  private _deleteClicked = -1;
  private _editedPet: PetsEntity;
  private _confirmation = false;

  constructor(private petsService: PetsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPetsService();
    // this.getPetsServiceConcat();
  }

  getIsAdmin() {
    return this._isAdmin;
  }

  getIsEmployee() {
    return this._isEmployee;
  }

  getPets() {
    return this._pets;
  }

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

  getPetById(petId): PetsEntity {
    let foundPet: PetsEntity;
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
      data: {title: 'delete ' + this.getPetById(petId).name + '?'}
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this._confirmation = dialogResult;
      if (this._confirmation) {
        this.deletePet(petId);
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
      this.ngOnInit();
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddPetDialogComponent, {
      minWidth: '30%',
    });
    dialogRef.afterClosed().subscribe(() => {
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
