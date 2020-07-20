import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'houses',
  templateUrl: './adoption-houses.component.html',
  styleUrls: ['./adoption-houses.component.css']
})
export class AdoptionHousesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
