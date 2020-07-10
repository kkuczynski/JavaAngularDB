import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdoptionHousesInterface } from './adoption-houses.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class AdoptionHousesService {
  private url = environment.urlAdoptionHouses;

  constructor(private http: HttpClient) { }
  getAH(): Observable<AdoptionHousesInterface[]> {
    return this.http.get<AdoptionHousesInterface[]>(this.url);
  }
}
