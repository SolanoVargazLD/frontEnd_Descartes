import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { listSuperior } from 'src/app/interface/list_levelHigher_interface';
import { ServiceDataPosgradoService } from 'src/app/service/aspirantSuperior/posgrado/data-posgrado/service-data-posgrado.service';
import { ShowPosgradoComponent } from '../show-posgrado.component';

@Component({
  selector: 'app-select-maestria-doctorado',
  templateUrl: './select-maestria-doctorado.component.html',
  styleUrls: ['./select-maestria-doctorado.component.css']
})
export class SelectMaestriaDoctoradoComponent  implements OnInit, OnChanges{
  @Input() selectedNivel: string= 'Maestria';

  @Input() selectedPosgrado: string;
  dataPos: listSuperior[]=[];
  @Output() selectEventPos= new EventEmitter<string>();
  @Output() selectEventNivelPos= new EventEmitter<string>();

  constructor(private serviceDataPosgradoService: ServiceDataPosgradoService,
    private compPadre: ShowPosgradoComponent,
    ){}

  ngOnInit(): void {
    this.loadData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('selectedNivel' in changes) {
      this.loadData();
    }
  }

  enviarDataSelect(){
    this.selectEventPos.emit(this.selectedNivel);
    this.selectEventNivelPos.emit(this.selectedPosgrado);
    this.compPadre.recargarData();
  }

  loadData(){
    this.serviceDataPosgradoService.getListPosgradoCareer(this.selectedNivel).subscribe(data=> {
          this.dataPos = data;
          this.selectedPosgrado= data[0].name;
          this.enviarDataSelect();
        }
    );
  }
}
