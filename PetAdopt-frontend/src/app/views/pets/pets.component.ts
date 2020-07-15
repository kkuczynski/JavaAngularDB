import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PetsInterface } from 'src/app/domain/external/pets.interface';
import { Spieces } from 'src/app/domain/enums/spieces.enum';
import { Sex } from 'src/app/domain/enums/sex.enum';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {


  private newPet: PetsInterface;
  private isAdmin = true;
  private isEmployee = true;
  private pets = [];
  private currentDate = new Date();
  private month = this.currentDate.getMonth();
  private AddPetTab = false;
  private inputForm: FormGroup;
  private adopted = false;
  private tmpAdopted = false;

  constructor(private petsService: PetsService, private formBuilder: FormBuilder) { 
    this.createForm();
   }
  ngOnInit() {
    this.getPetsService();

  }

  getIsAdmin() {
    return this.isAdmin;
  }
  getIsEmployee() {
    return this.isEmployee;
  }
  getPets() {
    return this.pets;
  }

  getCurrentDate() {
    return this.currentDate;
  }

  getPetsService() {
    this.petsService.getPetsWithNoHome().subscribe(data => this.pets = data);
    this.petsService.getPetsWithHome().subscribe(data => this.pets = data);
  }

  getAddPetTab() {
    return this.AddPetTab;
  }

  getInputForm() {
    return this.inputForm;
  }
  showAddTab() {
    this.AddPetTab = true;
  }


  createForm() {
    this.inputForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)')]],
      spieces: ['', [
        Validators.required]],
      race: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern('[a-zA-Z0-9\s]')]],
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

  tmpAdoptTrue(){
    this.tmpAdopted = true;
  }
  tmpAdoptFalse(){
    this.tmpAdopted = false;
  }
  adoptTrue(){
    this.adopted = true;
  }
  adoptFalse(){
    this.adopted = false;
  }
  getTmpAdopted(){
    return this.tmpAdopted;
  }
  anyAdoptTrue() {

    if (this.adopted || this.tmpAdopted) {
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
