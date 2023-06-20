import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AspirantBasicServicePDF {
  private url: string = environment._apiURL+'aspirantBasic';

  constructor(private http: HttpClient) { }

  public getDataPDF(id:number){
    return this.http.get(`${this.url}/prefichaPDF?aspirantB=${id}`, { responseType: 'blob' });
  }
}
