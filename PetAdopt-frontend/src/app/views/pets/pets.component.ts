import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { PetsExternal } from 'src/app/domain/external/pets.external';
import { MatDialog } from '@angular/material';
import { AddPetDialogComponent } from './add-pet-dialog/add-pet-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { AssignHouseDialogComponent } from './assign-house-dialog/assign-house-dialog.component';
import { LoginService } from 'src/app/services/login.service';
import { Role } from 'src/app/domain/enums/role.enum';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  private _newPet: PetsExternal;
  private _pets: PetsExternal[];
  private _currentDate: Date = new Date();
  private _editedPet: PetsExternal;
  private _confirmation = false;
  private _loggedAs: string = Role[Role.USER];


  constructor(
    private petsService: PetsService,
    public loginService: LoginService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.getPetsService();
    this.setRole();
    this.router.navigateByUrl('blank');
    this.router.navigateByUrl('pets');
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

  setRole() {
    this._loggedAs = this.loginService.role;
  }

  getLoggedAs(): string {
    this.setRole();
    return this._loggedAs;
  }

  getPets(): PetsExternal[] {
    return this._pets;
  }

  getCurrentDate(): Date {
    return this._currentDate;
  }

  getPetsService() {
    this.petsService.getAllPets().subscribe(data => this._pets = data);
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
        this.fetchData();
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
      this.fetchData();
    });
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddPetDialogComponent, {
      minWidth: '30%',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchData();
    });
  }

  openAssignDialog(petId: number) {
    this._editedPet = this.getPetById(petId);
    const dialogRef = this.dialog.open(AssignHouseDialogComponent, {
      minWidth: '50%',
      data: this._editedPet
    });
    dialogRef.afterClosed().subscribe(() => {
      this.fetchData();
    });
  }


  deletePet(id: number) {
    this.petsService.deletePet(id).subscribe();
    this.fetchData();
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
