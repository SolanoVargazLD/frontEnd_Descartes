import { listSuperior } from './../../../../interface/list_levelHigher_interface';
import { environment } from './../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListSuperiorService {
  private url: string = `${environment._apiURL}levelHigher`;

  constructor(private http: HttpClient) { }

  public getListLicenciature(){
    return this.http.get<listSuperior[]>(`${this.url}/listLicenciature`);
  }
}
