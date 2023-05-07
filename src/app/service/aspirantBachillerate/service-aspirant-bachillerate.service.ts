import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { aspirantNivelUpper } from 'src/app/interface/aspirantBachillerate_interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceAspirantBachillerateService {
  private url: string = environment._apiURL;
  constructor(private http: HttpClient) { }

  public getDataBachillerate(): Observable<aspirantNivelUpper[]>{
    return this.http.get<aspirantNivelUpper[]>(`${this.url}aspirantBachillerate/listBachillerate`);
  }
}
