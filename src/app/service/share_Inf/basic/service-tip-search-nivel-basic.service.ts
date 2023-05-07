import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServiceTipSearchNivelBasicService {
  tipoNivelBasic: string= 'Preescolar';

  constructor() { }

  public getTipoNivelBasic(): string {
    return this.tipoNivelBasic;
  }

  public setTipoNivelBasic(valor: string): void {
    this.tipoNivelBasic = valor;
  }
}
