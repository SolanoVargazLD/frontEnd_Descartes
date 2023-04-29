import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ServiceAdministrativeService } from 'src/app/service/adminitrastive/service-administrative.service';
import { Adminitrastive } from 'src/app/interface/adminitrastive_interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  dataAdmin: Adminitrastive= {
    id: 0,
    name: '',
    lastNameP: '',
    lastNameM: '',
    email: '',
    phone: '',
    // password: ''
  };
  nombre_Usuario: string = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private serviceAdministrativeService: ServiceAdministrativeService) { }

  ngOnInit(): void {
    this.leerDataAdminitrastive();
    // this.nombre_Usuario = `${this.dataAdmin.name} ${this.dataAdmin.lastNameP} ${this.dataAdmin.lastNameM}`
  }

  leerDataAdminitrastive(){
    this.serviceAdministrativeService.getData().subscribe((dataAdmin) =>{
      this.dataAdmin = dataAdmin;
      this.nombre_Usuario= `${dataAdmin.name} ${dataAdmin.lastNameP} ${dataAdmin.lastNameM}`
    })
  }
}

