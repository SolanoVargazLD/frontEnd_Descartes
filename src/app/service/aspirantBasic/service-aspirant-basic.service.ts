import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { aspirantNivelBasic } from '../../interface/aspirantBasic_interface';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceAspirantBasicService {
  private url: string = environment._apiURL+'aspirantBasic/listNivelBasic?name=';

  constructor(private http: HttpClient) { }

  public getDataPreescolar(): Observable<aspirantNivelBasic[]> {
    return this.http.get<aspirantNivelBasic[]>(`${this.url}Preescolar`);
  }

  public getDataPrimaria(): Observable<aspirantNivelBasic[]> {
    return this.http.get<aspirantNivelBasic[]>(`${this.url}Primaria`);
  }

  public getDataSecundaria(): Observable<aspirantNivelBasic[]> {
    return this.http.get<aspirantNivelBasic[]>(`${this.url}Secundaria`);
  }
}
