import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceExcelMediaService {
  private url: string = environment._apiURL+'aspirantBachillerate';

  constructor(private http: HttpClient) { }

  public getDataBasicExcel() {
    return this.http.get(`${this.url}/ReporteBachillerXlxs`, { responseType: 'blob' });
  }
}
