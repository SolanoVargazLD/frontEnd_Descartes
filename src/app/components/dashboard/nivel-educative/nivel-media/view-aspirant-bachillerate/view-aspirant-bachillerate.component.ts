import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AspirantBachillerate } from 'src/app/interface/aspirantbachillerate_view_interface';
import { ServiceViewAspirantBachillerateService } from 'src/app/service/aspirantBachillerate/viewAspirantBachillerate/service-view-aspirant-bachillerate.service';
import { ServiceIdBachillerAspirantService } from 'src/app/service/share_Inf/media/service-id-bachiller-aspirant.service';

@Component({
  selector: 'app-view-aspirant-bachillerate',
  templateUrl: './view-aspirant-bachillerate.component.html',
  styleUrls: ['./view-aspirant-bachillerate.component.css']
})
export class ViewAspirantBachillerateComponent implements OnInit {

  dataAspirantBachillerate:AspirantBachillerate= {
    id: 0,
    schoolOrigin: "",
    phone: "",
    email: "",
    aspirant: {
      id: 0,
      name: "",
      lastNameP: "",
      lastNameM: "",
      curp: "",
      bloodType: "",
      conditionS: "",
      sex: "",
      tipoAspirant: "",
      fatherTutor: [],
      address: {
        id: 0,
        street: "",
        number: "",
        colony: "",
        municipality: "",
        postal_code: ""
      }
    },
    levelUpperMiddle: {
      id: 0,
      name: "",
      level: "",
      img: ""
    }
  };

  constructor(private serviceIdBachillerAspirantService: ServiceIdBachillerAspirantService,              
              private serviceViewAspirantBachillerateService: ServiceViewAspirantBachillerateService,
              private router: Router) {}

  ngOnInit(): void {if(
    this.serviceIdBachillerAspirantService.getIdAspirant()==0){
      this.router.navigateByUrl(`/dashboard/NivelBachillerate`);
    }
    this.assignValueAspirant();
  }

  assignValueAspirant(){
    this.serviceViewAspirantBachillerateService.getAspirantBachillerate(this.serviceIdBachillerAspirantService.getIdAspirantBachiller()).subscribe(
      {
        next:data=>{
          this.dataAspirantBachillerate= data;
        },
        error:error =>{
          console.log("Error: "+error);
        }
      }
    );
  }

  goBack(): void {
    this.router.navigate([`/dashboard/NivelBachillerate`]);
  }
}
