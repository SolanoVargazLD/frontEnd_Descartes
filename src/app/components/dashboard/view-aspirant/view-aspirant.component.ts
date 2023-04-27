import {Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Aspirant } from 'src/app/interface/aspirant_interface';
import { ServiceIdAspirantService } from 'src/app/service/share_Inf/service-id-aspirant.service';

@Component({
  selector: 'app-view-aspirant',
  templateUrl: './view-aspirant.component.html',
  styleUrls: ['./view-aspirant.component.css']
})
export class ViewAspirantComponent implements OnInit{
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

  constructor(private serviceSharedAspirant: ServiceIdAspirantService, private router: ActivatedRoute, private routerNav:Router) {}

  ngOnInit(): void {
    this.validUndefinedData();
    this.assignValueAspirant();

    this.router.queryParams.subscribe(
      (params: Params)=>{
        this.rutAnt= params['name'];
      }
    )

  }

  assignValueAspirant(){
    this.serviceSharedAspirant.getData().subscribe(
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

  validUndefinedData(){
    if (this.serviceSharedAspirant.getIdAspirant()==0) {
        this.routerNav.navigate([this.rutAnt]);
     }
  }

  regresar(){
    this.routerNav.navigate([this.rutAnt]);
  }
}
