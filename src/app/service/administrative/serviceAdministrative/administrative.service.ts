import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Administrative, AdministrativeAdd } from '../../../interface/adminitrastive_interface';

@Injectable({
  providedIn: 'root'
})
export class AdministrativeService {
  private url: string=  environment._apiURL+ 'administrative';

  constructor(private http: HttpClient) { }

  public getData(): Observable<Administrative[]> {
    return this.http.get<Administrative[]>(this.url);
  }

  public postDataAdministrative(data:AdministrativeAdd){
    return this.http.post<any>(this.url,data);
  }

  public deleteAdministrative(id: number){
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }
}
