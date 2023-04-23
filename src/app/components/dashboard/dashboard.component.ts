import { Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ServiceAdministrativeService } from 'src/app/service/adminitrastive/service-administrative.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  dataAdmin: any;
  nombre_Usuario:string="";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private serviceAdministrativeService:ServiceAdministrativeService) {}

  ngOnInit(): void {
    this.leerDataAdminitrastive();
  }

  leerDataAdminitrastive(){
    this.serviceAdministrativeService.getData().subscribe((dataAdmin) =>{
      this.dataAdmin = dataAdmin;
      this.nombre_Usuario= `${dataAdmin.name} ${dataAdmin.lastNameP} ${dataAdmin.lastNameM}`
    })
  }
}
