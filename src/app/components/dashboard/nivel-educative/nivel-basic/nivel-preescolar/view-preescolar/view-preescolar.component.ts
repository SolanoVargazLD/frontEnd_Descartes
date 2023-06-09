import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { aspirantNivelBasic } from 'src/app/interface/aspirantBasic_interface';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';
import { ServiceAspirantBasicService } from 'src/app/service/aspirantBasic/service-aspirant-basic.service';
import { ServiceExcelBasicService } from 'src/app/service/excel/nivelBasic/service-excel-basic.service';
import { ServiceIdAspirantService } from 'src/app/service/share_Inf/basic/service-id-aspirant.service';
import { ServiceTipSearchNivelBasicService } from 'src/app/service/share_Inf/basic/service-tip-search-nivel-basic.service';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-preescolar',
  templateUrl: './view-preescolar.component.html',
  styleUrls: ['./view-preescolar.component.css']
})
export class ViewPreescolarComponent implements OnInit{
  displayedColumns: string[] = ['Id', 'name', 'lastNameP', 'lastNameM', 'curp', 'operations'];
  dataSource: any;
  dataVacio: boolean = false;
  dataTamanio: number = 0;
  tipeBusqueda: string= '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  suscription: Subscription;

  constructor(private serviceAspirantBasicService: ServiceAspirantBasicService,
    private serviceSharedAspirant: ServiceIdAspirantService,
    private serviceAspirantService: ServiceAspirantService,
    private serviceTipSearchNivelBasicService: ServiceTipSearchNivelBasicService,
    private serviceExcelBasicService: ServiceExcelBasicService,
    private router: Router) {}

  ngOnInit(): void {
    this.readDataServiceAspirantBasic();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readDataServiceAspirantBasic() {
    this.serviceAspirantBasicService.getDataPreescolar().subscribe(
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
      this.tipeBusqueda= 'Preescolar';
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
          ).then((result)=>{
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

  reload():void{
    window.location.reload();
  }

  clickViewAspirant(id: number, vista: string) {
    this.serviceSharedAspirant.setIdAspirant(id);
    this.serviceTipSearchNivelBasicService.setTipoNivelBasic(vista);
  }

  genExcel(){
    this.serviceExcelBasicService.getDataBasicExcel("Preescolar").subscribe(response => {
      const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      // ? Fecha------------------
      const today = new Date();
      let day = String(today.getDate()).padStart(2, '0') + String(today.getMonth() + 1).padStart(2, '0')+String(today.getFullYear()).slice(-2);

      link.download = `reporte_preescolar_${day}.xlsx`;
      link.click();
      URL.revokeObjectURL(url);
    })
  }

}
