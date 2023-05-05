import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { aspirantNivelBasic } from '../../interface/aspirantBasic_interface';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServiceAspirantBasicService {
  private url: string = environment._apiURL;
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  get refresh$() {
    return this._refresh$;
  }

  public getDataPreescolar(): Observable<aspirantNivelBasic[]> {
    return this.http.get<aspirantNivelBasic[]>(`${this.url}aspirantBasic/listPreescolar`).pipe(tap(() => { this._refresh$.next(); }));
  }

  public getDataPrimaria(): Observable<aspirantNivelBasic[]> {
    return this.http.get<aspirantNivelBasic[]>(`${this.url}aspirantBasic/listPrimaria`).pipe(tap(() => { this._refresh$.next(); }));
  }

  public getDataSecundaria(): Observable<aspirantNivelBasic[]> {
    return this.http.get<aspirantNivelBasic[]>(`${this.url}aspirantBasic/listSecundaria`).pipe(tap(() => { this._refresh$.next(); }));
  }
}
