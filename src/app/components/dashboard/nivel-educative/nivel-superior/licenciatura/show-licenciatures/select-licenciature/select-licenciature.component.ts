import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { listSuperior } from 'src/app/interface/list_levelHigher_interface';
import { ListSuperiorService } from 'src/app/service/aspirantSuperior/licenciature/list-superior/list-superior.service';
import { ShowLicenciaturesComponent } from '../show-licenciatures.component';
import { ServiceIdLicenciatureService } from '../../../../../../../service/share_Inf/superior/licenciature/service-id-licenciature.service';
@Component({
  selector: 'app-select-licenciature',
  templateUrl: './select-licenciature.component.html',
  styleUrls: ['./select-licenciature.component.css']
})
export class SelectLicenciatureComponent implements OnInit{
  @Input() selected: string;
  dataLic: listSuperior[]=[];
  @Output() selectEvent= new EventEmitter<string>();
  opcionSelect= (this.serviceIdLicenciatureService.getSelected()=='')?true:false;

  constructor(private listSuperiorService: ListSuperiorService,
    private compPadre: ShowLicenciaturesComponent,
    private serviceIdLicenciatureService: ServiceIdLicenciatureService){}

  ngOnInit(): void {
    this.loadData();
    this.selected= this.serviceIdLicenciatureService.getSelected()==''? '' : this.serviceIdLicenciatureService.getSelected();
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
