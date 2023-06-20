import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AspirantBachillerateService {
  private url: string = environment._apiURL+'aspirantBachillerate';

  constructor(private http: HttpClient) { }

  public getDataPDF(id:number){
    return this.http.get(`${this.url}/prefichaPDF?aspirantB=${id}`, { responseType: 'blob' });
  }
}
