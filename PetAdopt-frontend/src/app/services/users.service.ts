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
  // const?
  private URL = environment.urlUsers;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<UsersExternal[]> {
    return this.http.get<UsersExternal[]>(this.URL);
  }

  getUser(id: number): Observable<UsersExternal> {
    return this.http.get<UsersExternal>(this.URL + '/' + id);
  }
  // HALO TYP ZWRACANY
  postNewUser(user: UsersExternal) {
    return this.http.post<UsersExternal>(this.URL, user, httpOptions);
  }
  // HALO TYP ZWRACANY
  putUser(user: UsersExternal) {
    return this.http.put<UsersExternal>(this.URL, user, httpOptions);
  }
  // HALO TYP ZWRACANY
  deleteUser(id: number) {
    return this.http.delete<string>(this.URL + '/' + id, httpOptions);
  }
  // co on zwraca ?
  loginUser(username: string, password: string): Observable<any> {
    const body = new LoginBody(username, password);
    // no to mogło być w chyba w jednym stringu :?
    return this.http.post<UsersExternal>(this.URL + '/' + 'login', body, httpOptions);
  }
}
// hmm to mogłoby być w osobnym pliku :?
export class LoginBody {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

