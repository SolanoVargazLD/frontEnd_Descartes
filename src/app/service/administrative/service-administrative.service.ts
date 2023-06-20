import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Administrative } from '../../interface/adminitrastive_interface';

@Injectable({
  providedIn: 'root'
})

export class ServiceAdministrativeService {

  private idAdministrative: number= 1;
  private url: string=  environment._apiURL+ 'administrative';

  constructor(private http: HttpClient) { }

  public getIdAdministrative(): number {
    return this.idAdministrative;
  }

  public setIdAdministrative(valor: number): void {
    this.idAdministrative = valor;
  }

  public getData(): Observable<Administrative> {
    return this.http.get<Administrative>(this.url+'/'+this.idAdministrative);
  }
}
