import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioIdPosgradoService {
  idAspirant: number= 0;
  idAspirantPosgrado: number= 0;
  selected: string= '';

  constructor(private http: HttpClient) { }

  public getIdAspirant(): number {
    return this.idAspirant;
  }

  public setIdAspirant(valor: number): void {
    this.idAspirant = valor;
  }

  public getIdAspirantPosgrado (): number {
    return this.idAspirantPosgrado;
  }

  public setIdAspirantPosgrado(valor: number): void {
    this.idAspirantPosgrado = valor;
  }

  public getSelected(): string {
    return this.selected;
  }

  public setSelected(valor: string): void {
    this.selected = valor;
  }
}
