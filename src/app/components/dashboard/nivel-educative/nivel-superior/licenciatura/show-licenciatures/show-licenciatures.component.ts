import { Component, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AspirantLicenciature } from 'src/app/interface/aspirant_Licenciature';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';
import { ServiceViewDataLicenciatureService } from 'src/app/service/aspirantSuperior/licenciature/service-view-data-licenciature.service';
import { ListSuperiorService } from 'src/app/service/aspirantSuperior/list-superior.service';
import { ServiceIdBachillerAspirantService } from 'src/app/service/share_Inf/media/service-id-bachiller-aspirant.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-licenciatures',
  templateUrl: './show-licenciatures.component.html',
  styleUrls: ['./show-licenciatures.component.css']
})
export class ShowLicenciaturesComponent implements OnInit, OnChanges  {
   nombreLicenciature: string= 'Civil';
   @Input() selected:string;
    displayedColumns: string[] = ['Id', 'name', 'lastNameP', 'lastNameM', 'curp', 'operations'];
    dataSource: any;
    dataVacio: boolean = false;
    dataTamanio: number = 0;
    tipeBusqueda: string = '';
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private listSuperiorService: ListSuperiorService,
      private serviceIdBachillerAspirantService: ServiceIdBachillerAspirantService,
      private serviceAspirantService: ServiceAspirantService,
      private serviceViewDataLicenciatureService: ServiceViewDataLicenciatureService) { }

    ngOnInit(): void {
      this.readDataServiceAspirantBasic();
    }

    ngOnChanges(changes: SimpleChanges) {
      console.log("algo Cambio");
    }

    recargarData(){
      this.serviceViewDataLicenciatureService.getApirantsLicenciature( this.selected).subscribe(
        {
          next: data => {
            this.dataSource = new MatTableDataSource<AspirantLicenciature>(data);
            this.dataSource.paginator = this.paginator;
            this.dataVacio = (data.length == 0) ? true : false;
            this.dataTamanio = data.length;
          },
          error: error => {
            console.log("Error: " + error);
          }
        });
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    readDataServiceAspirantBasic() {
      console.log("readDataServiceAspirantBasic: "+this.nombreLicenciature);
      this.listSuperiorService.getListLicenciature().subscribe(data=> {
        this.serviceViewDataLicenciatureService.getApirantsLicenciature(data[0].name).subscribe(
          {
            next: data => {
              this.dataSource = new MatTableDataSource<AspirantLicenciature>(data);
              this.dataSource.paginator = this.paginator;
              this.dataVacio = (data.length == 0) ? true : false;
              this.dataTamanio = data.length;
            },
            error: error => {
              console.log("Error: " + error);
            }
          });
      }
  );

    }

    openDialog(id_asp: number, nombre: string, apP: string, apM: string, curp: string): void {
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
          console.log(id_asp);

          let resp = this.serviceAspirantService.deleteAspirant(id_asp).subscribe();
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
