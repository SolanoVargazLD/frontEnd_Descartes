import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ServiceAdministrativeService } from 'src/app/service/administrative/service-administrative.service';
import { ServiceTipSearchNivelBasicService } from 'src/app/service/share_Inf/basic/service-tip-search-nivel-basic.service';
import { Router } from '@angular/router';
import { Administrative } from '../../interface/adminitrastive_interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnChanges{

  dataAdmin: Administrative= {
    id: 0,
    name: '',
    lastNameP: '',
    lastNameM: '',
    email: '',
    phone: '',
    password: ''
  };
  nombre_Usuario: string = '';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private serviceAdministrativeService: ServiceAdministrativeService,
              private serviceTipSearchNivelBasicService:ServiceTipSearchNivelBasicService,
              private router: Router) { }

  ngOnInit(): void {
    this.leerDataAdminitrastive();
  }

  leerDataAdminitrastive(){
    this.serviceAdministrativeService.getData().subscribe((dataAdmin) =>{
      this.dataAdmin = dataAdmin;
    })
  }

  busquedaNivel(nivel: string){
    this.serviceTipSearchNivelBasicService.setTipoNivelBasic(nivel);
    this.router.navigate(['/dashboard/NivelBasic']);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchange");
  }
}

