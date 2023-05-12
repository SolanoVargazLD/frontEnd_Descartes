import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listSuperior } from 'src/app/interface/list_levelHigher_interface';
import { environment } from 'src/environments/environment.development';

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
