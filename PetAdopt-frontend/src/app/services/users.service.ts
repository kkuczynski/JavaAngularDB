import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersExternal } from '../domain/external/users.external';
import { environment } from '../../environments/environment';
import { LoginBody } from '../domain/structs/login-body.class';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UsersExternal[]> {
    return this.http.get<UsersExternal[]>(environment.urlUsers);
  }

  getUser(id: number): Observable<UsersExternal> {
    return this.http.get<UsersExternal>(environment.urlUsers + '/' + id);
  }
  // HALO TYP ZWRACANY
  postNewUser(user: UsersExternal) {
    return this.http.post<UsersExternal>(environment.urlUsers, user, httpOptions);
  }
  // HALO TYP ZWRACANY
  putUser(user: UsersExternal): Observable<UsersExternal> {
    return this.http.put<UsersExternal>(environment.urlUsers, user, httpOptions);
  }
  // HALO TYP ZWRACANY
  deleteUser(id: number): Observable<string> {
    return this.http.delete<string>(environment.urlUsers + '/' + id, httpOptions);
  }

  loginUser(username: string, password: string): Observable<UsersExternal> {
    const body = new LoginBody(username, password);
    return this.http.post<UsersExternal>(environment.urlUsers + '/' + 'login', body, httpOptions);
  }
}



