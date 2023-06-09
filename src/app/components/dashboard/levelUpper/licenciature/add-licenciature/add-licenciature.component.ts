import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AdministrativeService } from 'src/app/service/administrative/serviceAdministrative/administrative.service';
import { LicenciatureService } from 'src/app/service/levelHigher/LicenciatureService/licenciature.service';
import { LevelHigherAdd } from 'src/app/interface/levelHigher_interface';

@Component({
  selector: 'app-add-licenciature',
  templateUrl: './add-licenciature.component.html',
  styleUrls: ['./add-licenciature.component.css']
})
export class AddLicenciatureComponent {
  selected = 'Licenciatura';

  constructor(private router: Router, private licenciatureService:LicenciatureService){}



  saveData(form: NgForm): void {
    if(form.value.nameCar!=''&& form.value.claveCar!='')
    Swal.fire({
      title: 'ADVERTENCIA',
      text: `Esta seguro(a) de Agregar una nueva carrera`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2a53c4',
      cancelButtonColor: '#ff3a3a',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        let levelHigherAdd: LevelHigherAdd= {
          'nameCareer': form.value.nameCar,
          'keyCareer': form.value.claveCar,
          'nivelEducativo': this.selected,
          'img': 'ruta_de_la_imagen.jpg',
          'pdf': 'ruta_del_pdf.pdf',
          'school': {
            'id': 1
          }
        }
        this.licenciatureService.postDataLicenciature(levelHigherAdd).subscribe(response=>{
          this.router.navigateByUrl('/dashboard/CarrerasSuperiores');
        });
        Swal.fire(
          'Añadido',
          'La carrera ha sido agregada',
          'success'
        );
      }
    });
  }
}

