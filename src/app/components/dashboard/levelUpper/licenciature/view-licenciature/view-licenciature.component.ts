import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { LevelHigher } from 'src/app/interface/aspirant_Licenciature_data';
import { AdministrativeService } from 'src/app/service/administrative/serviceAdministrative/administrative.service';
import { ServiceExcelSuperiorService } from 'src/app/service/excel/nivelsuperior/service-excel-superior.service';
import { LicenciatureService } from 'src/app/service/levelHigher/LicenciatureService/licenciature.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-licenciature',
  templateUrl: './view-licenciature.component.html',
  styleUrls: ['./view-licenciature.component.css']
})
export class ViewLicenciatureComponent implements OnInit{
  displayedColumns: string[] = ['id', 'nameCareer', 'nivelEducativo','keyCareer', 'operations'];
  dataSource: any;
  dataVacio: boolean = false;
  dataTamanio: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  suscription: Subscription;

  constructor(private licenciatureService: LicenciatureService) {}

  ngOnInit(): void {
    this.readDataServiceLicenciatures();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readDataServiceLicenciatures() {
    this.licenciatureService.getDataLicenciature().subscribe(
      {
        next: data => {
          this.dataSource = new MatTableDataSource<LevelHigher>(data);
          this.dataSource.paginator = this.paginator;
          this.dataVacio = (data.length == 0) ? true : false;
          this.dataTamanio = data.length;
        },
        error: error => {
          console.log("Error: " + error);
        }
      });
  }

  openDialogDelete(id: number, name: string): void {
    console.log("id_"+id);

    Swal.fire({
      title: 'ADVERTENCIA',
      text: `Esta seguro(a) de eliminar La Carrera: ${name}`,
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#2a53c4',
      cancelButtonColor: '#ff3a3a',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.licenciatureService.deleteLicenciature(id).subscribe()) {
          Swal.fire(
            'Eliminado',
            'Carrera eliminada de la lista',
            'success'
          ).then((result)=>{
            window.location.reload();
          })
        } else {
          Swal.fire(
            'Fallo',
            'Carrera eliminada, revisar informacion.',
            'question'
          );
        };
      }
    });
  }

}
