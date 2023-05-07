import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceIdBachillerAspirantService {
  idAspirant:number = 0;
  idAspirantBachiller:number = 0;

  constructor(private http: HttpClient) { }

  public getIdAspirant(): number {
    return this.idAspirant;
  }

  public setIdAspirant(valor: number): void {
    this.idAspirant = valor;
  }

  public getIdAspirantBachiller(): number {
    return this.idAspirantBachiller;
  }

  public setIdAspirantBachiller(valor: number): void {
    this.idAspirantBachiller = valor;
  }
}
