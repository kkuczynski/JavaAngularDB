import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersEntity } from '../domain/external/users.entity';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = environment.urlUsers;

  constructor(private http: HttpClient) { }
  getUsers(): Observable<UsersEntity[]> {
    return this.http.get<UsersEntity[]>(this.URL);
  }
}
