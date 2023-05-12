import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AspirantPostgrado } from 'src/app/interface/aspirant_posgrado';
import { listSuperior } from 'src/app/interface/list_levelHigher_interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataPosgradoService {

  private url: string = `${environment._apiURL}levelHigher`;
  constructor(private http: HttpClient) { }

  public getListPosgradoCareer(nivel: string ){
    return this.http.get<listSuperior[]>(`${this.url}/postgraduate?nivelEducativePosgrado=${nivel}`);
  }

  // public getlistPosgrado(nivel: string, career: string){
  //   return this.http.get<AspirantPostgrado>(`${this.url}/postgraduate?nivelEducativePosgrado=${nivel}`);
  // }
  // http://localhost:8080/api/descartes/aspirantPostgraduate/especific?nameCareer=IA&nivelEducativo=Doctorado
}
