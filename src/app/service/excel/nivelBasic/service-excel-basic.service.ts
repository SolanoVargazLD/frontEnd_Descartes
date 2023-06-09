import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceExcelBasicService {
  private url: string = environment._apiURL+'aspirantBasic';

  constructor(private http: HttpClient) { }

  public getDataBasicExcel(basic: string) {
    return this.http.get(`${this.url}/ReporteBasicXlxs?nivelBasic=${basic}`, { responseType: 'blob' });
  }
}
