import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ServiceAspirantService} from 'src/app/service/aspirant/service-aspirant.service';
import {ServiceDataPosgradoService} from 'src/app/service/aspirantSuperior/posgrado/data-posgrado/service-data-posgrado.service';
import {AspirantPostgrado} from 'src/app/interface/aspirant_posgrado';
import {ServicioAspirantPosgradoService} from 'src/app/service/aspirantSuperior/posgrado/view-posgrado/servicio-aspirant-posgrado.service';
import {ServicioIdPosgradoService} from 'src/app/service/share_Inf/superior/posgrado/servicio-id-posgrado.service';

import Swal from 'sweetalert2';

@Component({selector: 'app-show-posgrado', templateUrl: './show-posgrado.component.html', styleUrls: ['./show-posgrado.component.css']})
export class ShowPosgradoComponent implements OnInit {
    selected : string = 'Maestria';
    selectedPosgrado : string;
    displayedColumns : string[] = [
        'Id',
        'name',
        'lastNameP',
        'lastNameM',
        'cedula',
        'operations'
    ];
    dataSource : any;
    dataVacio : boolean = false;
    dataTamanio : number = 0;
    tipeBusqueda : string = '';
    @ViewChild(MatPaginator)paginator !: MatPaginator;

    constructor(private serviceDataPosgradoService : ServiceDataPosgradoService, private servicioAspirantPosgradoService : ServicioAspirantPosgradoService, private servicioIdPosgradoService : ServicioIdPosgradoService, private serviceAspirantService : ServiceAspirantService) {}

    ngOnInit(): void {
        if (this.servicioIdPosgradoService.getSelectedNivel() == '') {
            this.readDataServiceAspirantBasic();
        }
    }

    recargarData() {
        this.servicioAspirantPosgradoService.getlistPosgrado(this.selectedPosgrado, this.selected).subscribe({
            next: data => {
                this.dataSource = new MatTableDataSource<AspirantPostgrado>(data);
                this.dataSource.paginator = this.paginator;
                this.dataVacio = (data.length == 0) ? true : false;
                this.dataTamanio = data.length;
            },
            error: error => {
                console.log("Error: " + error);
            }
        });
        if (this.servicioIdPosgradoService.getSelectedNivel() != '') {
            this.servicioIdPosgradoService.setIdAspirant(0);
            this.servicioIdPosgradoService.setIdAspirantPosgrado(0);
            this.servicioIdPosgradoService.setSelectedNivel('');
            this.servicioIdPosgradoService.setSelectedPosgrad('');
        }
    }

    applyFilter(event : Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    readDataServiceAspirantBasic() {
        this.serviceDataPosgradoService.getListPosgradoCareer(this.selected).subscribe(data => {
            this.servicioAspirantPosgradoService.getlistPosgrado(data[0].name, this.selected).subscribe({
                next: data => {
                    this.dataSource = new MatTableDataSource<AspirantPostgrado>(data);
                    this.dataSource.paginator = this.paginator;
                    this.dataVacio = (data.length == 0) ? true : false;
                    this.dataTamanio = data.length;
                },
                error: error => {
                    console.log("Error: " + error);
                }
            });
        });
    }

    openDialog(id_asp : number, nombre : string, apP : string, apM : string, curp : string): void {
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
                if (this.serviceAspirantService.deleteAspirant(id_asp).subscribe()) {
                    Swal.fire('Eliminado', 'Aspirante eliminado de la lista', 'success').then((result) => {
                        this.recargarData();
                    });
                } else {
                    Swal.fire('Fallo', 'Aspirante no eliminado, revisar informacion.', 'question');
                };
            }
        });

    }

    clickViewAspirant(id : number, id_b : number) {
        this.servicioIdPosgradoService.setIdAspirant(id);
        this.servicioIdPosgradoService.setIdAspirantPosgrado(id_b);
        this.servicioIdPosgradoService.setSelectedNivel(this.selected);
        this.servicioIdPosgradoService.setSelectedPosgrad(this.selectedPosgrado);
    }

}
