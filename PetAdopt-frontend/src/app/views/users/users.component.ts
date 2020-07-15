import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  private _users = [];
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(data => this._users = data);
  }

  getUsers() {
    return this._users;
  }
}
