import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';
import * as globals from 'globals';



@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  private isAdmin = globals.isAdmin;
  private isEmployee = globals.isEmployee;
  private pets = [];
  private currentDate = new Date();
  private month = this.currentDate.getMonth();

  constructor(private petsService: PetsService) { }
  ngOnInit() {
    this.getPetsService();

  }
  getIsAdmin(){
    return this.isAdmin;
  }
  getIsEmployee(){
    return this.isEmployee;
  }
  getPets(){
    return this.pets;
  }

  getCurrentDate(){
    return this.currentDate;
  }

  public compareDates(dateA: Date, days: number, dateB: Date): boolean {
    let newDateA: Date = new Date(dateA);
    const newDateB: Date = new Date(dateB);
    newDateA.setDate(newDateA.getDate() + days);
    if (newDateA > newDateB) {
      return true;
    }
    else {
      return false;
    }
  }
  public addDays(date: Date, days: number): Date {
    let newDate: Date = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }
  public getPetsService() {
    this.petsService.getPets().subscribe(data => this.pets = data);
    this.pets.forEach(pet => {
      console.log(pet.name);
    });
  }

}
