import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AHInterface } from './ah.interface';

@Injectable({
  providedIn: 'root'
})
export class AHService {

  private url = 'http://localhost:8088/adoptionhouses';

  constructor(private http: HttpClient) { }
  getAH(): Observable<AHInterface[]> {
    return this.http.get<AHInterface[]>(this.url);
  }
}
