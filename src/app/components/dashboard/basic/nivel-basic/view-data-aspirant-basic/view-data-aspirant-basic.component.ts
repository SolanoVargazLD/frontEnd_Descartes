import { Component, OnInit } from '@angular/core';
import { Aspirant } from 'src/app/interface/aspirant_interface';
import { ServiceIdAspirantService } from '../../../../../service/share_Inf/service-id-aspirant.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-view-data-aspirant-basic',
  templateUrl: './view-data-aspirant-basic.component.html',
  styleUrls: ['./view-data-aspirant-basic.component.css']
})
export class ViewDataAspirantBasicComponent implements OnInit {
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
