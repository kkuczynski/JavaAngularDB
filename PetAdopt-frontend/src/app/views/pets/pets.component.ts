import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PetsEntity } from 'src/app/domain/external/pets.entity';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';


// TODO: send pets via http
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
  private _inputForm: FormGroup;
  private _adopted = false;
  private _tmpAdopted = false;
  private _deleteClicked = -1;

  constructor(private petsService: PetsService, private formBuilder: FormBuilder) {
    this.createForm();
  }
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

  getInputForm() {
    return this._inputForm;
  }
  showAddTab() {
    this._AddPetTab = true;
  }
  hideAddTab() {
    this._AddPetTab = false;
  }
  deletePet(id: number){
    this.petsService.deletePet(id).subscribe();
    this.getPetsService();
    this.getPetsServiceConcat();
  }

  postPet() {
    const date = new Date();
    this._newPet = new PetsEntity();
    this._newPet.setNew(
      this._inputForm.get('name').value,
      this._inputForm.get('spieces').value,
      this._inputForm.get('race').value,
      this._inputForm.get('age').value,
      this.dateConverter(date),
      this._inputForm.get('health').value,
      this._inputForm.get('sex').value,
      this._inputForm.get('sterilized').value,
      this._inputForm.get('adopted').value,
      this._inputForm.get('temporaryAdopted').value,
      this._inputForm.get('adoptDate').value ? this.dateConverter(this._inputForm.get('adoptDate').value) : null,
      this._inputForm.get('tmpAdoptForDays').value ? this._inputForm.get('tmpAdoptForDays').value : 0);
    console.log(this._newPet);
    this.petsService.postNewPet(this._newPet).subscribe(pet => this._pets.push(pet));
  }

  createForm() {
    this._inputForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20)
      ]],
      spieces: ['', [
        Validators.required]],
      race: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
      ]],
      health: ['', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(250)]],
      age: [Number, [Validators.required, Validators.pattern('[0-9]+$')]],
      sex: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)]],
      sterilized: [Boolean, Validators.required],
      adopted: [Boolean, Validators.required],
      adoptDate: [Date],
      temporaryAdopted: [Boolean, Validators.required],
      tmpAdoptForDays: [Number, Validators.pattern('[0-9]+$')]
    });
  }

  tmpAdoptTrue() {
    this._tmpAdopted = true;
  }
  tmpAdoptFalse() {
    this._tmpAdopted = false;
  }
  adoptTrue() {
    this._adopted = true;
  }
  adoptFalse() {
    this._adopted = false;
  }
  getTmpAdopted() {
    return this._tmpAdopted;
  }
  anyAdoptTrue() {

    if (this._adopted || this._tmpAdopted) {
      return true;
    }
    else {
      return false;
    }
  }

  deleteClickedChange(id: number){
    this._deleteClicked = id;
    console.log(this._deleteClicked);
  }
  getDeleteClicked(){
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

  dateConverter(date: Date) {
    const datepipe = new DatePipe('en-US');
    console.log(datepipe.transform(date, 'yyyy-MM-dd'));
    return datepipe.transform(date, 'yyyy-MM-dd');
  }

  addDays(date: Date, days: number): Date {
    const newDate: Date = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

}
