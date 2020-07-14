import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {



  private isAdmin = true;
  private isEmployee = true;
  private pets = [];
  private currentDate = new Date();
  private month = this.currentDate.getMonth();
  private AddPetTab = false;
  private inputForm: FormGroup;

  constructor(private petsService: PetsService, private formBuilder: FormBuilder) { this.createForm(); }
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
      adoptDate: [Date, Validators.required],
      temporaryAdopted: [Boolean, Validators.required],
      tmpAdoptForDays: [Number]
    });

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
