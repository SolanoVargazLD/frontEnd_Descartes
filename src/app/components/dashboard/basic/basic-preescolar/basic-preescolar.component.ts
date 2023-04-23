import { Component, OnInit, ViewChild} from '@angular/core';
import { ServiceAspirantBasicService } from 'src/app/service/aspirantBasic/service-aspirant-basic.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { aspirantNivelBasic } from 'src/app/interface/aspirantBasic_interface';
import { ServiceIdAspirantService } from '../../../../service/share_Inf/service-id-aspirant.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-basic-preescolar',
  templateUrl: './basic-preescolar.component.html',
  styleUrls: ['./basic-preescolar.component.css']
})

export class BasicPreescolarComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'name', 'lastNameP', 'lastNameM', 'curp', 'operations'];
  dataSource: any;
  dataVacio: boolean= false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private serviceAspirantBasicService: ServiceAspirantBasicService, private serviceSharedAspirant: ServiceIdAspirantService) {}

  ngOnInit(): void {
    this.readDataServiceAspirantBasic();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readDataServiceAspirantBasic() {
    this.serviceAspirantBasicService.getData().subscribe((dataAspirantBasic) => {
      this.dataSource= new MatTableDataSource<aspirantNivelBasic>(dataAspirantBasic);
      this.readPaginator();
      this.dataVacio= (this.dataSource.length===0)?true: false;
    });
  }

  readPaginator() {
      this.dataSource.paginator = this.paginator;
  }

  openDialog(id: number, nombre:string, apP: string, apM: string, curp: string): void {
    console.log(this.dataSource);
    Swal.fire({
      title: 'ADVERTENCIA',
      text: `Esta seguro(a) de eliminar al Aspirante de Preescolar ${id} ${nombre} ${apP} ${apM} - ${curp}`,
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#2a53c4',
      cancelButtonColor: '#ff3a3a',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado',
          'Aspirante eliminado de la lista',
          'success'
        )
      }
    })
  }

  clickViewAspirant(id: number){
    this.serviceSharedAspirant.setIdAspirant(id);
  }

}
