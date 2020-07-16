import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PetsEntity } from 'src/app/domain/external/pets.entity';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AddPetDialogComponent } from './add-pet-dialog/add-pet-dialog.component';

// this.petsService.postNewPet(this._newPet).subscribe(pet => this._pets.push(pet));

// TODO: zapytac o 4 taby
// TODO: response entity poczytac i cos zwraca, backend
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  private _newPet: PetsEntity;
  private _isAdmin = true;
  private _isEmployee = true;
  private _pets = [];
  private _currentDate = new Date();
  private _month = this._currentDate.getMonth();
  private _AddPetTab = false;
  private _deleteClicked = -1;

  constructor(private petsService: PetsService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getPetsService();
    this.getPetsServiceConcat();
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
    this.petsService.getPetsWithNoHome().subscribe(data => this._pets = data);
  }
  getPetsServiceConcat() {
    this.petsService.getPetsWithHome().subscribe(data => {
      this._pets = this._pets.concat(data);
    });
  }

  getAddPetTab() {
    return this._AddPetTab;
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddPetDialogComponent, {
      minWidth: '30%',
      data: { _newPet: this._newPet }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this._newPet = result;
      console.log(this._newPet);
    });
}
  hideAddTab() {
    this._AddPetTab = false;
  }
  deletePet(id: number) {
    this.petsService.deletePet(id).subscribe();
    this.getPetsService();
    this.getPetsServiceConcat();
  }

  deleteClickedChange(id: number) {
    this._deleteClicked = id;
    console.log(this._deleteClicked);
  }
  getDeleteClicked() {
    return this._deleteClicked;
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
