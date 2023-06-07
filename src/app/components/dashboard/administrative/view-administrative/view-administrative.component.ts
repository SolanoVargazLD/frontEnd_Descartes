import { Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AdministrativeService } from 'src/app/service/administrative/serviceAdministrative/administrative.service';


import Swal from 'sweetalert2';
import { Administrative } from '../../../../interface/adminitrastive_interface';

@Component({
  selector: 'app-view-administrative',
  templateUrl: './view-administrative.component.html',
  styleUrls: ['./view-administrative.component.css']
})
export class ViewAdministrativeComponent implements OnInit{
  displayedColumns: string[] = ['Id', 'Nombre', 'lastNameP', 'lastNameM', 'email', 'phone','operations'];
  dataSource: any;
  dataVacio: boolean = false;
  dataTamanio: number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  suscription: Subscription;

  constructor(private administrativeService: AdministrativeService) {}

  ngOnInit(): void {
    this.readDataServiceAspirantBasic();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  readDataServiceAspirantBasic() {
    this.administrativeService.getData().subscribe(
      {
        next: data => {
          this.dataSource = new MatTableDataSource<Administrative>(data);
          this.dataSource.paginator = this.paginator;
          this.dataVacio = (data.length == 0) ? true : false;
          this.dataTamanio = data.length;
        },
        error: error => {
          console.log("Error: " + error);
        }
      });
  }

  openDialogDelete(id: number): void {
    Swal.fire({
      title: 'ADVERTENCIA',
      text: `Esta seguro(a) de eliminar al Administrativo`,
      icon: 'error',
      showCancelButton: true,
      confirmButtonColor: '#2a53c4',
      cancelButtonColor: '#ff3a3a',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.administrativeService.deleteAdministrative(id).subscribe()) {
          Swal.fire(
            'Eliminado',
            'Aspirante eliminado de la lista',
            'success'
          ).then((result)=>{
            window.location.reload();
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
}
