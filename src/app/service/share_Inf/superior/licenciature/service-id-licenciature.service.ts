import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceIdLicenciatureService {
  idAspirant:number = 0;
  idAspirantLicenciature:number = 0;
  selected: string= '';

  constructor(private http: HttpClient) { }

  public getIdAspirant(): number {
    return this.idAspirant;
  }

  public setIdAspirant(valor: number): void {
    this.idAspirant = valor;
  }

  public getIdAspirantLicenciature(): number {
    return this.idAspirantLicenciature;
  }

  public setIdAspirantLicenciature(valor: number): void {
    this.idAspirantLicenciature = valor;
  }

  public getSelected(): string {
    return this.selected;
  }

  public setSelected(valor: string): void {
    this.selected = valor;
  }
}
