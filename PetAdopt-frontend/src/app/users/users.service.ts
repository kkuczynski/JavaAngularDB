import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersInterface } from './users.interface';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
// jako stałą sobie zadeklaruj lub najlepiej w environments
  private url = 'http://localhost:8088/users';

  constructor(private http: HttpClient) { }
  getUsers(): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(this.url);
  }
}
