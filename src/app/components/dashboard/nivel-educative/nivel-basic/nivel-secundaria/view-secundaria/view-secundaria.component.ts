import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { aspirantNivelBasic } from 'src/app/interface/aspirantBasic_interface';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';
import { ServiceAspirantBasicService } from 'src/app/service/aspirantBasic/service-aspirant-basic.service';
import { ServiceIdAspirantService } from 'src/app/service/share_Inf/service-id-aspirant.service';
import { ServiceTipSearchNivelBasicService } from 'src/app/service/share_Inf/service-tip-search-nivel-basic.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-secundaria',
  templateUrl: './view-secundaria.component.html',
  styleUrls: ['./view-secundaria.component.css']
})
export class ViewSecundariaComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = ['Id', 'name', 'lastNameP', 'lastNameM', 'curp', 'operations'];
  dataSource: any;
  dataVacio: boolean = false;
  dataTamanio: number = 0;
  tipeBusqueda: string = '';
  suscription: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private serviceAspirantBasicService: ServiceAspirantBasicService,
    private serviceSharedAspirant: ServiceIdAspirantService,
    private serviceAspirantService: ServiceAspirantService,
    private serviceTipSearchNivelBasicService: ServiceTipSearchNivelBasicService,
    private router: Router) { }

  ngOnInit(): void {
    this.readDataServiceAspirantBasic();
    this.suscription = this.serviceAspirantBasicService.refresh$.subscribe(() => {
      this.readDataServiceAspirantBasic();
    });
  }

  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readDataServiceAspirantBasic() {
    this.serviceAspirantBasicService.getDataSecundaria().subscribe(
      {
        next: data => {
          this.dataSource = new MatTableDataSource<aspirantNivelBasic>(data);
          this.dataSource.paginator = this.paginator;
          this.dataVacio = (data.length == 0) ? true : false;
          this.dataTamanio = data.length;
        },
        error: error => {
          console.log("Error: " + error);
        }
      });
    this.tipeBusqueda = 'Secundaria';
  }

  openDialog(id: number, nombre: string, apP: string, apM: string, curp: string): void {
    Swal.fire({
      title: 'ADVERTENCIA',
      text: `Esta seguro(a) de eliminar al Aspirante de Preescolar ${nombre} ${apP} ${apM} - ${curp}`,
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#2a53c4',
      cancelButtonColor: '#ff3a3a',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        let resp = this.serviceAspirantService.deleteAspirant(id).subscribe();
        if (resp) {
          Swal.fire(
            'Eliminado',
            'Aspirante eliminado de la lista',
            'success'
          );
        } else {
          Swal.fire(
            'Fallo',
            'Aspirante no eliminado, revisar informacion.',
            'question'
          );
        }
      }
    });
  }

  clickViewAspirant(id: number, vista: string) {
    this.serviceSharedAspirant.setIdAspirant(id);
    this.serviceTipSearchNivelBasicService.setTipoNivelBasic(vista);
  }

}

