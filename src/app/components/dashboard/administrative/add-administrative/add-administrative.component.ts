import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AdministrativeAdd } from 'src/app/interface/adminitrastive_interface';
import Swal from 'sweetalert2';
import { AdministrativeService } from '../../../../service/administrative/serviceAdministrative/administrative.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-administrative',
  templateUrl: './add-administrative.component.html',
  styleUrls: ['./add-administrative.component.css']
})
export class AddAdministrativeComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password: string;
  //hide = true;

  constructor(private administrativeService: AdministrativeService, private router: Router){}

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Introduce un correo';
    }

    return this.email.hasError('email') ? 'Correo no valido' : '';
  }


  saveData(form: NgForm): void {
    if(form.value.nameAsp!=''&& form.value.apePaternoAsp!=''&& form.value.apeMaternoAsp!=''&& form.value.phone!=''&& this.email.value!='' && this.password!=''  )
    Swal.fire({
      title: 'ADVERTENCIA',
      text: `Esta seguro(a) de Agregar un nuevo Administrativo`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2a53c4',
      cancelButtonColor: '#ff3a3a',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        let administrative: AdministrativeAdd= {
          "name": form.value.nameAsp,
          "lastNameP": form.value.apePaternoAsp,
          "lastNameM": form.value.apeMaternoAsp,
          "email": `${this.email.value}`,
          "phone": form.value.phone,
          "password":  `${this.password}` ,
          "roles": {
            "id": 1
          },
          "school": {
            "id": 1
          }
        }
        this.administrativeService.postDataAdministrative(administrative).subscribe(response=>{
          this.router.navigateByUrl('/dashboard/Administrative');
        });
        Swal.fire(
          'Añadido',
          'El Administrativo ha sido agregado',
          'success'
        );
      }
    });
  }
}

