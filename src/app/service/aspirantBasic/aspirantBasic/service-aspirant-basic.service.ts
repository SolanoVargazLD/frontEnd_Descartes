import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { AspirantBasic } from 'src/app/interface/aspirant_basic_interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceAspirantBasicServiceP {

  private url: string = environment._apiURL+'aspirantBasic';

  constructor(private http: HttpClient) { }

  public postUpdate(data: AspirantBasic){
    return this.http.post<number>(this.url, data);
  }

}
