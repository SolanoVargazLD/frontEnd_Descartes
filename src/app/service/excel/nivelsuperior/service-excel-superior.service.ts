

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceExcelSuperiorService {
  private url: string = environment._apiURL+'aspirantPostgraduate';

  constructor(private http: HttpClient) { }

  public getDataBasicExcel(basic: string) {
    return this.http.get(`${this.url}/ReportePosgradoXlxs?nivelCareer=${basic}`, { responseType: 'blob' });
  }
}
//
