import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LevelHigher } from 'src/app/interface/aspirant_Licenciature_data';
import { LevelHigherAdd } from 'src/app/interface/levelHigher_interface';

@Injectable({
  providedIn: 'root'
})
export class LicenciatureService {
  private url: string=  environment._apiURL+ 'levelHigher';

  constructor(private http: HttpClient) { }

  public getDataLicenciature(): Observable<LevelHigher[]> {
    return this.http.get<LevelHigher[]>(`${this.url}`);
  }

  public postDataLicenciature(data:LevelHigherAdd){
    return this.http.post<any>(this.url,data);
  }

  public deleteLicenciature(id: number){
    return this.http.delete<boolean>(`${this.url}/${id}`);
  }
}
