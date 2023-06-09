
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceExcelSuperiorPostService {

  private url: string = environment._apiURL+'aspirantPostgraduate';

  constructor(private http: HttpClient) { }

  public getDataBasicExcel(nivel: string, name:string) {
    return this.http.get(`${this.url}/ReportePosgradoXlxs?nivelCareer=${nivel}&nameCareer=${name}`, { responseType: 'blob' });
  }
}
