import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aspirant, putAspirantDTO } from 'src/app/interface/aspirant_interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class ServiceAspirantService {

  private url: string= `${environment._apiURL}aspirants`;

  constructor(private http: HttpClient) { }

  public getDataId(id: number): Observable<Aspirant> {
    return this.http.get<Aspirant>(`${this.url}/${id}`);
  }

  public putUpdate(id: number,data: putAspirantDTO){
    return this.http.put<Aspirant>(`${this.url}/${id}`, data);
  }

  public deleteAspirant(id: number,){
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }

}
