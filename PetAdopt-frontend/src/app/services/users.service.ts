import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersInterface } from '../domain/external/users.interface';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = environment.urlUsers;

  constructor(private http: HttpClient) { }
  getUsers(): Observable<UsersInterface[]> {
    return this.http.get<UsersInterface[]>(this.url);
  }
}
