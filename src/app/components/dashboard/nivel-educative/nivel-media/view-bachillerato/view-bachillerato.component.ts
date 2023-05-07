import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceAspirantBachillerateService } from 'src/app/service/aspirantBachillerate/service-aspirant-bachillerate.service';

import Swal from 'sweetalert2';
import { aspirantNivelUpper } from '../../../../../interface/aspirantBachillerate_interface';
import { ServiceIdBachillerAspirantService } from 'src/app/service/share_Inf/media/service-id-bachiller-aspirant.service';

@Component({
  selector: 'app-view-bachillerato',
  templateUrl: './view-bachillerato.component.html',
  styleUrls: ['./view-bachillerato.component.css']
})
export class ViewBachilleratoComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'name', 'lastNameP', 'lastNameM', 'curp', 'operations'];
  dataSource: any;
  dataVacio: boolean = false;
  dataTamanio: number = 0;
  tipeBusqueda: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private serviceAspirantBachillerateService: ServiceAspirantBachillerateService,
    private serviceIdBachillerAspirantService: ServiceIdBachillerAspirantService,) { }

  ngOnInit(): void {
    this.readDataServiceAspirantBasic();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readDataServiceAspirantBasic() {

    this.serviceAspirantBachillerateService.getDataBachillerate().subscribe(
      {
        next: data => {
          this.dataSource = new MatTableDataSource<aspirantNivelUpper>(data);
          this.dataSource.paginator = this.paginator;
          this.dataVacio = (data.length == 0) ? true : false;
          this.dataTamanio = data.length;
        },
        error: error => {
          console.log("Error: " + error);
        }
      });
    this.tipeBusqueda = 'Bachillerato';


  }

  openDialog(id: number, nombre: string, apP: string, apM: string, curp: string): void {
    Swal.fire({
      title: 'ADVERTENCIA',
      text: `Esta seguro(a) de eliminar al Aspirante de Bachillerato ${nombre} ${apP} ${apM} - ${curp}`,
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#2a53c4',
      cancelButtonColor: '#ff3a3a',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        let resp //= this.serviceAspirantService.deleteAspirant(id).subscribe();
        if (resp) {
          Swal.fire(
            'Eliminado',
            'Aspirante eliminado de la lista',
            'success'
          ).then((result) => {
            this.reload();
          })
        } else {
          Swal.fire(
            'Fallo',
            'Aspirante no eliminado, revisar informacion.',
            'question'
          );
        };
      }
    });

  }

  reload(): void {
    window.location.reload();
  }

  clickViewAspirant(id: number, id_b: number) {
    this.serviceIdBachillerAspirantService.setIdAspirant(id);
    this.serviceIdBachillerAspirantService.setIdAspirantBachiller(id_b);
  }

}
