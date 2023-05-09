import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceAspirantBachillerateService } from 'src/app/service/aspirantBachillerate/viewData_aspirantB/service-aspirant-bachillerate.service';

import Swal from 'sweetalert2';

import { AspirantNivelUpper } from 'src/app/interface/aspirantBachillerate_interface';
import { ServiceIdBachillerAspirantService } from 'src/app/service/share_Inf/media/service-id-bachiller-aspirant.service';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';
import { ServiceViewDataLicenciatureService } from 'src/app/service/aspirantSuperior/licenciature/service-view-data-licenciature.service';
import { AspirantLicenciature } from 'src/app/interface/aspirant_Licenciature';


@Component({
  selector: 'app-aspirant-licenciature',
  templateUrl: './aspirant-licenciature.component.html',
  styleUrls: ['./aspirant-licenciature.component.css']
})

export class AspirantLicenciatureComponent implements OnInit, OnChanges  {
  @Input() nombreLicenciature: string= 'Civil';

    displayedColumns: string[] = ['Id', 'name', 'lastNameP', 'lastNameM', 'curp', 'operations'];
    dataSource: any;
    dataVacio: boolean = false;
    dataTamanio: number = 0;
    tipeBusqueda: string = '';
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(private serviceAspirantBachillerateService: ServiceAspirantBachillerateService,
      private serviceIdBachillerAspirantService: ServiceIdBachillerAspirantService,
      private serviceAspirantService: ServiceAspirantService,
      private serviceViewDataLicenciatureService: ServiceViewDataLicenciatureService) { }

    ngOnInit(): void {
      this.readDataServiceAspirantBasic();
    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes['nombreLicenciature']) {
        console.log('El valor de nombreLicenciature ha cambiado=> '+this.nombreLicenciature);
        this.serviceViewDataLicenciatureService.getApirantsLicenciature(this.nombreLicenciature).subscribe(
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
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    readDataServiceAspirantBasic() {
      console.log(this.nombreLicenciature);

      this.serviceViewDataLicenciatureService.getApirantsLicenciature(this.nombreLicenciature).subscribe(
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
