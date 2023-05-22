import { environment } from './../../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AspirantPosgradoData, AspirantPosgradoDataDAO } from 'src/app/interface/aspirant_posgrado_data';

@Injectable({
  providedIn: 'root'
})
export class ServiceEditPosgradoService {
 private url: string= `${environment._apiURL}aspirantPostgraduate`;

  constructor(private http:HttpClient) { }

  public getAspirantPostgrado(id: number){
    return this.http.get<AspirantPosgradoData>(`${this.url}/${id}`);
  }

  public putAspirantPosgrade(id: number,data: AspirantPosgradoDataDAO){
    return this.http.put<any>(`${this.url}/${id}`, data);
  }
}
