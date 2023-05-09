import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AspirantLicenciature } from 'src/app/interface/aspirant_Licenciature';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceViewDataLicenciatureService {
  private url: string = `${environment._apiURL}aspirantSuperior`;
  constructor(private http: HttpClient) { }

  public getApirantsLicenciature(lic: string): Observable<AspirantLicenciature[]>{
    return this.http.get<AspirantLicenciature[]>(`${this.url}/licenciatura/${lic}`);
  }

}
