import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aspirant, putAspirantDTO } from 'src/app/interface/aspirant_interface';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceIdAspirantService {
  // public idAspirant: EventEmitter<number>= new EventEmitter<number>();
  private url: string=  environment._apiURL+ 'aspirants/';
  idAspirant:number = 3;

  constructor(private http: HttpClient) { }

  public getIdAspirant(): number {
    return this.idAspirant;
  }

  public setIdAspirant(valor: number): void {
    this.idAspirant = valor;
  }

  public getData(): Observable<Aspirant> {
    return this.http.get<Aspirant>(`${this.url}/${this.idAspirant}`);
  }

  public putUpdate(id: number,data: any){
    console.log(`${this.url}/${id}`);

    return this.http.put<Aspirant>(`${this.url}/${id}`, data);
  }
}
