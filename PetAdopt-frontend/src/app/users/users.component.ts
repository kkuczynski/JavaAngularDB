import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
//  pola prywatne, enkapsulacja danych
  public users = [];
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => this.users = data);
  }

}
