import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { AspirantNivelUpper } from 'src/app/interface/aspirantBachillerate_interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceAspirantBachillerateService {
  private url: string = environment._apiURL;
  constructor(private http: HttpClient) { }

  public getDataBachillerate(): Observable<AspirantNivelUpper[]>{
    return this.http.get<AspirantNivelUpper[]>(`${this.url}aspirantBachillerate/listBachillerate`);
  }
}
