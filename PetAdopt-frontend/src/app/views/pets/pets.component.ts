import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PetsInterface } from 'src/app/domain/external/pets.interface';

// TODO: send pets via http
// TODO: zapytac o 4 taby
// TODO: response entity poczytac i cos zwraca, backend
@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  private _newPet: PetsInterface;
  private _isAdmin = true;
  private _isEmployee = true;
  private _pets = [];
  private _currentDate = new Date();
  private _month = this._currentDate.getMonth();
  private _AddPetTab = false;
  private _inputForm: FormGroup;
  private _adopted = false;
  private _tmpAdopted = false;

  constructor(private petsService: PetsService, private formBuilder: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {
    this.getPetsService();

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
    this.petsService.getPetsWithHome().subscribe(data => this._pets = data);
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

  postPet(){
    const date = new Date();
    this._newPet =
    {
      1,
      _inputForm.get('name').value,
      _inputForm.get('spieces').value,
      _inputForm.get('race').value,
      _inputForm.get('age').value,
      date,
      _inputForm.get('health').value,
      _inputForm.get('sex').value,
      _inputFOrm.get('sterilized').value,
      _inputForm.get('adopted') //TODO

    };
    this.petsService.postNewPet(this._newPet);
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
      age: [Number, Validators.required],
      sex: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(6)]],
      sterilized: [Boolean, Validators.required],
      adopted: [Boolean, Validators.required],
      adoptDate: [Date],
      temporaryAdopted: [Boolean, Validators.required],
      tmpAdoptForDays: [Number]
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
