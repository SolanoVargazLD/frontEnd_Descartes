import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AspirantBachillerate, AspirantBachillerateDAO } from 'src/app/interface/aspirantbachillerate_view_interface';
import { AspirantBachillerateSave } from 'src/app/interface/aspirant_bachillerate_interfaz';


@Injectable({
  providedIn: 'root'
})
export class ServiceViewAspirantBachillerateService {
  private url: string= `${environment._apiURL}aspirantBachillerate`;
  constructor(private http:HttpClient) { }

  public getAspirantBachillerate(id: number){
    return this.http.get<AspirantBachillerate>(`${this.url}/${id}`);
  }

  public putAspirantBachillerate(id: number,data: AspirantBachillerateDAO){
    return this.http.put<any>(`${this.url}/${id}`, data);
  }

  public postAspirantBachillerate(data:AspirantBachillerateSave){
    return this.http.post<number>(`${this.url}`,data);
  }
}
