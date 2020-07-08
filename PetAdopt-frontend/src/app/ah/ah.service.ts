import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AHInterface } from './ah.interface';

@Injectable({
  providedIn: 'root'
})
// Dobra samoopisujący się Serwis :D 
// Formatowanie
export class AHService {
// jako stałą sobie zadeklaruj lub najlepiej w environments
  private url = 'http://localhost:8088/adoptionhouses';

  constructor(private http: HttpClient) { }
  getAH(): Observable<AHInterface[]> {
    return this.http.get<AHInterface[]>(this.url);
  }
}
