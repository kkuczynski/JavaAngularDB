import { Component, OnInit } from '@angular/core';
import { PetsService } from './pets.service';


@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

public pets = [];
public currentDate = new Date();
public month = this.currentDate.getMonth();
  constructor(private petsService: PetsService) { }
  public compareDates(dateA: Date, days: number, dateB: Date): boolean{
    let newDateA: Date = new Date(dateA);
    const newDateB: Date = new Date(dateB);
    newDateA.setDate(newDateA.getDate() + days);
    if (newDateA > newDateB){
      return true;
    }
    else{
      return false;
    }
  }
  public addDays(date: Date, days: number): Date{
      let newDate: Date = new Date(date);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
  }

  ngOnInit() {
    this.petsService.getPets().subscribe(data => this.pets = data);
    for(let pet of this.pets){
      console.log(pet.name);
    }
  }
  
 

}
