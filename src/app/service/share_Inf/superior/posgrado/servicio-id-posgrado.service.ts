import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioIdPosgradoService {
  idAspirant: number= 0;
  idAspirantPosgrado: number= 0;
  selectedNivel: string= '';
  selectedPosgrad: string= '';

  constructor(private http: HttpClient) { }

  public getIdAspirant(): number {
    return this.idAspirant;
  }

  public setIdAspirant(valorI: number): void {
    this.idAspirant = valorI;
  }

  public getIdAspirantPosgrado (): number {
    return this.idAspirantPosgrado;
  }

  public setIdAspirantPosgrado(valorA: number): void {
    this.idAspirantPosgrado = valorA;
  }

  public getSelectedNivel(): string {
    return this.selectedNivel;
  }

  public setSelectedNivel(valorN: string): void {
    this.selectedNivel = valorN;
  }

  public getSelectedPosgrad(): string {
    return this.selectedPosgrad;
  }

  public setSelectedPosgrad(valorP: string): void {
    this.selectedPosgrad = valorP;
  }
}
