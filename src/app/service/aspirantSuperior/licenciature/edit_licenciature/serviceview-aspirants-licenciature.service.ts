import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AspirantLicenciatureData, AspirantLicenciatureDataDAO, AspirantLicenciaturePost } from 'src/app/interface/aspirant_Licenciature_data';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ServiceviewAspirantsLicenciatureService {
  private url: string= `${environment._apiURL}aspirantSuperior`;

  constructor(private http:HttpClient) { }

  public postAspirantLicenciature(data: AspirantLicenciaturePost){
    return this.http.post<number>(`${this.url}`, data);
  }

  public getAspirantLicenciature(id: number){
    return this.http.get<AspirantLicenciatureData>(`${this.url}/${id}`);
  }

  public putAspirantLicenciature(id: number,data: AspirantLicenciatureDataDAO){
    return this.http.put<any>(`${this.url}/${id}`, data);
  }
}
