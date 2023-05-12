import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AspirantLicenciature } from 'src/app/interface/aspirant_Licenciature';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';
import { ServiceViewDataLicenciatureService } from 'src/app/service/aspirantSuperior/licenciature/service-view-data-licenciature.service';
import { ListSuperiorService } from 'src/app/service/aspirantSuperior/licenciature/list-superior/list-superior.service';
import { ServiceIdLicenciatureService } from 'src/app/service/share_Inf/superior/licenciature/service-id-licenciature.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-licenciatures',
  templateUrl: './show-licenciatures.component.html',
  styleUrls: ['./show-licenciatures.component.css']
})
export class ShowLicenciaturesComponent implements OnInit {
  selected: string;
  displayedColumns: string[] = ['Id', 'name', 'lastNameP', 'lastNameM', 'curp', 'operations'];
  dataSource: any;
  dataVacio: boolean = false;
  dataTamanio: number = 0;
  tipeBusqueda: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private listSuperiorService: ListSuperiorService,
    private serviceIdLicenciatureService: ServiceIdLicenciatureService,
    private serviceAspirantService: ServiceAspirantService,
    private serviceViewDataLicenciatureService: ServiceViewDataLicenciatureService) { }

  ngOnInit(): void {
    if (this.serviceIdLicenciatureService.getSelected() == '') {
      this.listSuperiorService.getListLicenciature().subscribe(data => {this.selected=data[0].name});
      this.readDataServiceAspirantBasic();
    } else {
      this.selected = this.serviceIdLicenciatureService.getSelected();
      this.recargarData();
    }
  }

  recargarData() {
    this.serviceViewDataLicenciatureService.getApirantsLicenciature(this.selected).subscribe(
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
    this.listSuperiorService.getListLicenciature().subscribe(data => {
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
            this.recargarData();
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
    this.serviceIdLicenciatureService.setIdAspirant(id);
    this.serviceIdLicenciatureService.setIdAspirantLicenciature(id_b);
     this.serviceIdLicenciatureService.setSelected(this.selected);


  }

}
