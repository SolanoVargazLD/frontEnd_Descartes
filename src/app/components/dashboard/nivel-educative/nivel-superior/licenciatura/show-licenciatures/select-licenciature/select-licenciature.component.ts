import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { listSuperior } from 'src/app/interface/list_levelHigher_interface';
import { ListSuperiorService } from 'src/app/service/aspirantSuperior/list-superior.service';
import { ShowLicenciaturesComponent } from '../show-licenciatures.component';
@Component({
  selector: 'app-select-licenciature',
  templateUrl: './select-licenciature.component.html',
  styleUrls: ['./select-licenciature.component.css']
})
export class SelectLicenciatureComponent implements OnInit{
  selected: string;
  dataLic: listSuperior[]=[];
  @Output() selectEvent= new EventEmitter<string>();

  constructor(private listSuperiorService: ListSuperiorService,
    private compPadre: ShowLicenciaturesComponent){}

  ngOnInit(): void {
    this.loadData();
  }

  enviarDataSelect(){
    this.selectEvent.emit(this.selected);
    this.compPadre.recargarData();
  }

  loadData(){
    this.listSuperiorService.getListLicenciature().subscribe(data=> {
          this.dataLic = data;
          this.selected= this.dataLic[0].name;
        }
    );
  }

}
