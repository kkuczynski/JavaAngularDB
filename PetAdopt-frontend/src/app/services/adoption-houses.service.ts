import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdoptionHousesInterface } from '../domain/external/adoption-houses.interface';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})

export class AdoptionHousesService {
  private URL = environment.urlAdoptionHouses;

  constructor(private http: HttpClient) { }
  getAH(): Observable<AdoptionHousesInterface[]> {
    return this.http.get<AdoptionHousesInterface[]>(this.URL);
  }
}
