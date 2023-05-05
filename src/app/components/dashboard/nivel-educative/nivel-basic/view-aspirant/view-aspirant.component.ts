import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Aspirant } from 'src/app/interface/aspirant_interface';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';
import { ServiceIdAspirantService } from 'src/app/service/share_Inf/service-id-aspirant.service';
import { ServiceTipSearchNivelBasicService } from 'src/app/service/share_Inf/service-tip-search-nivel-basic.service';

@Component({
  selector: 'app-view-aspirant',
  templateUrl: './view-aspirant.component.html',
  styleUrls: ['./view-aspirant.component.css']
})
export class ViewAspirantComponent implements OnInit {
  dataAspirant: Aspirant= {
    id: 0,
    name: '',
    lastNameP: '',
    lastNameM: '',
    curp: '',
    bloodType: '',
    conditionS: '',
    tipoAspirant:'',
    sex: '',
    fatherTutor: [],
    address: {
      id: 0,
      street: '',
      number: '',
      colony: '',
      municipality: '',
      postal_code: ''
    }
  };

  rutAnt!: string;

  constructor(private serviceAspirantService: ServiceAspirantService,
              private serviceIdAspirantService: ServiceIdAspirantService,
              private serviceTipSearchNivelBasicService: ServiceTipSearchNivelBasicService,
              private router: ActivatedRoute,
              private routerNav:Router) {}

  ngOnInit(): void {
    this.assignValueAspirant();

    this.router.queryParams.subscribe(
      (params: Params)=>{
        this.rutAnt= params['name'];
      }
    )
  }

  assignValueAspirant(){
    this.serviceAspirantService.getDataId(this.serviceIdAspirantService.getIdAspirant()).subscribe(
        {
          next:data=>{
            this.dataAspirant= data;
          },
          error:error =>{
            console.log("Error: "+error);
          }
        }
    );
  }

  goBack(): void {
    this.routerNav.navigate([`/dashboard/Nivel${this.serviceTipSearchNivelBasicService.getTipoNivelBasic()}`]);
  }
}
