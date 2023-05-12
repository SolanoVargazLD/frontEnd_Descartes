 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AspirantPostgrado } from 'src/app/interface/aspirant_posgrado';
import { AspirantPosgradoData, AspirantPosgradoDataDAO } from 'src/app/interface/aspirant_posgrado_data';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServicioAspirantPosgradoService {
  private url: string= `${environment._apiURL}aspirantPostgraduate`
  constructor(private http: HttpClient) { }

  public getAspirantPosgrado(id: number){
    return this.http.get<AspirantPosgradoData>(`${this.url}/${id}`);
  }

  public getlistPosgrado(career: string, nivel: string){
    return this.http.get<AspirantPostgrado[]>(`${this.url}/especific?nameCareer=${career}&nivelEducativo=${nivel}`);
  }

  public putAspirantPosgrado(id: number,data: AspirantPosgradoDataDAO){
    return this.http.put<any>(`${this.url}/${id}`, data);
  }
}
