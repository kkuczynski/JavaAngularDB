import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersExternal } from '../domain/external/users.external';
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

  getAllUsers(): Observable<UsersExternal[]> {
    return this.http.get<UsersExternal[]>(this.URL);
  }

  getUser(id: number): Observable<UsersExternal> {
      return this.http.get<UsersExternal>(this.URL + '/' + id);
  }

  postNewUser(user: UsersExternal) {
    return this.http.post<UsersExternal>(this.URL, user, httpOptions);
  }

  putUser(user: UsersExternal) {
    return this.http.put<UsersExternal>(this.URL, user, httpOptions);
  }

  deleteUser(id: number) {
    return this.http.delete<string>(this.URL + '/' + id, httpOptions);
  }

  loginUser(username: string, password: string) {
    const body = '{"username": "' + username + '", "password": "' + password + '"}';
    return this.http.post<UsersExternal>(this.URL + '/' + 'login', body, httpOptions);
  }
}

