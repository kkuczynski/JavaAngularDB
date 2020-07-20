import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersEntity } from '../domain/external/users.entity';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL = environment.urlUsers;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UsersEntity[]> {
    return this.http.get<UsersEntity[]>(this.URL);
  }

  getUser(id: number) {
    return this.http.get<UsersEntity>(this.URL + '/' + id, httpOptions);
  }

  postNewUser(user: UsersEntity) {
    return this.http.post<UsersEntity>(this.URL, user, httpOptions);
  }

  putUser(user: UsersEntity) {
    return this.http.put<UsersEntity>(this.URL, user, httpOptions);
  }

  deleteUser(id: number) {
    return this.http.delete<string>(this.URL + '/' + id, httpOptions);
  }
}

