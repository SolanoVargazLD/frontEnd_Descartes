import { Component, OnInit } from '@angular/core';
import { listSuperior } from 'src/app/interface/list_levelHigher_interface';
import { ListSuperiorService } from 'src/app/service/aspirantSuperior/list-superior.service';

@Component({
  selector: 'app-licenciatura',
  templateUrl: './licenciatura.component.html',
  styleUrls: ['./licenciatura.component.css']
})
export class LicenciaturaComponent implements OnInit{
  selected: string;
  dataLic: listSuperior[]=[];

  constructor(private listSuperiorService: ListSuperiorService){}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.listSuperiorService.getListLicenciature().subscribe(data=> {
          this.dataLic = data;
          this.selected= this.dataLic[0].name;
        }
    );
  }

}
