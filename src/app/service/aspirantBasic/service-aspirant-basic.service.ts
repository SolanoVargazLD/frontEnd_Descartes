import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { aspirantNivelBasic } from '../../interface/aspirantBasic_interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceAspirantBasicService {

  private url: string= environment._apiURL;

  constructor(private http: HttpClient) { }

  public getDataPreescolar(): Observable<aspirantNivelBasic[]> {
    return this.http.get<aspirantNivelBasic[]>(`${this.url}aspirantBasic/listPreescolar`);
  }

  public getDataPrimaria(): Observable<aspirantNivelBasic[]> {
    return this.http.get<aspirantNivelBasic[]>(`${this.url}aspirantBasic/listPrimaria`);
  }

  public getDataSecundaria(): Observable<aspirantNivelBasic[]> {
    return this.http.get<aspirantNivelBasic[]>(`${this.url}aspirantBasic/listSecundaria`);
  }
}
