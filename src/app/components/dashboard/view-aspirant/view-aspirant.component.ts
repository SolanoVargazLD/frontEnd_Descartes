import { Component, OnInit } from '@angular/core';
import { Aspirant } from 'src/app/interface/aspirant_interface';
import { ServiceIdAspirantService } from 'src/app/service/share_Inf/service-id-aspirant.service';

@Component({
  selector: 'app-view-aspirant',
  templateUrl: './view-aspirant.component.html',
  styleUrls: ['./view-aspirant.component.css']
})
export class ViewAspirantComponent implements OnInit {
  idAspirant: number= 0;
  dataAspirant: any;
  constructor(private serviceSharedAspirant: ServiceIdAspirantService) {}

  ngOnInit(): void {
    this.assignValueID();
    this.leerDataAdminitrastive();
    console.log("ngOnInit()");
  }

  assignValueID(){
    this.idAspirant= this.serviceSharedAspirant.getIdAspirant();
  }

  leerDataAdminitrastive(){
    this.serviceSharedAspirant.getData().subscribe((dataAdmin: Aspirant) =>{
    console.log(dataAdmin);
    this.dataAspirant = dataAdmin.name;
    });
    console.log(this.dataAspirant);
  }

}
