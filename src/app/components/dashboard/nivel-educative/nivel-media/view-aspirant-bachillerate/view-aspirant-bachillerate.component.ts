import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Aspirant } from 'src/app/interface/aspirant_interface';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';
import { ServiceIdAspirantService } from 'src/app/service/share_Inf/basic/service-id-aspirant.service';
import { ServiceTipSearchNivelBasicService } from 'src/app/service/share_Inf/basic/service-tip-search-nivel-basic.service';

@Component({
  selector: 'app-view-aspirant-bachillerate',
  templateUrl: './view-aspirant-bachillerate.component.html',
  styleUrls: ['./view-aspirant-bachillerate.component.css']
})
export class ViewAspirantBachillerateComponent implements OnInit {
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
              private router: Router) {}

  ngOnInit(): void {if(
    this.serviceIdAspirantService.getIdAspirant()==0){
      this.router.navigateByUrl(`/dashboard/Nivel${this.serviceTipSearchNivelBasicService.getTipoNivelBasic()}`, { skipLocationChange: true });
    }
    this.assignValueAspirant();
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
    this.router.navigate([`/dashboard/Nivel${this.serviceTipSearchNivelBasicService.getTipoNivelBasic()}`]);
  }
}
