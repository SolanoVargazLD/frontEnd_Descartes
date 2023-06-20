import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AspirantPost } from 'src/app/interface/aspirant_interface';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';
import { AspirantBasic } from 'src/app/interface/aspirant_basic_interface';
import { ServiceAspirantBasicServiceP } from 'src/app/service/aspirantBasic/aspirantBasic/service-aspirant-basic.service';
import { AspirantBasicServicePDF } from 'src/app/service/pdf/aspirantBasic/aspirant-basic.service';

@Component({
  selector: 'app-formulario-basic',
  templateUrl: './formulario-basic.component.html',
  styleUrls: ['./formulario-basic.component.css']
})
export class FormularioBasicComponent {
  selected = 'H';
  nivelBasic = '1';
  checked = false;
  formData: any = {
    'nameAsp': "luis",
    'apePaternoAsp': `solano`,
    'apeMaternoAsp': `vargaz`,
    'curpAsp': `SOVL950722HOCLRS03`,
    'sangreAsp': `O+`,
    'nameCondit': `NORMAL`,
    'namePadTutor1': `gildardo`,
    'apePaternoPadTutor1': `solano`,
    'apeMaternoPadTutor1': `guzman`,
    'phone1PadTutor1': `5555555555`,
    'phone2PadTutor1': `8888888888`,
    'namePadTutor2': `eva`,
    'apePaternoPadTutor2': `vargaz`,
    'apeMaternoPadTutor2': `elizondo`,
    'phone1PadTutor2': `11111111`,
    'phone2PadTutor2': `22222222`,
    'calleDir': `Emiliano`,
    'numDir': `17`,
    'colDir': `guardado`,
    'munDir': `zaachila`,
    'codPDir': `71318`,
  }
  email1 = new FormControl('gil@gmail.com', [Validators.required, Validators.email]);
  email2 = new FormControl('eva@gmail.com', [Validators.required, Validators.email]);

  constructor(private router: Router, private serviceAspirantService: ServiceAspirantService, private serviceAspirantBasicServiceP: ServiceAspirantBasicServiceP, private aspirantBasicServicePDF: AspirantBasicServicePDF) { }


  getErrorMessage() {
    if (this.email1.hasError('required')) {
      return 'Introduce un correo';
    }
    return this.email1.hasError('email') ? 'Correo no valido' : '';
  }
  getErrorMessage2() {
    if (this.email2.hasError('required')) {
      return 'Introduce un correo';
    }
    return this.email2.hasError('email') ? 'Correo no valido' : '';
  }

  saveData(form: NgForm): void {
    if (form.value.nameCar != '' && form.value.claveCar != '')
      Swal.fire({
        title: 'Nota',
        text: `¿Los Datos agregados son los correctos?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2a53c4',
        cancelButtonColor: '#ff3a3a',
        confirmButtonText: 'Aceptar'
      }).then((result) => {
        if (result.isConfirmed) {
          let aspirantPost: AspirantPost = {
            'name': `${this.formData.nameAsp}`,
            'lastNameP': `${this.formData.apePaternoAsp}`,
            'lastNameM': `${this.formData.apeMaternoAsp}`,
            'curp': `${this.formData.curpAsp}`,
            'bloodType': `${this.formData.sangreAsp}`,
            'conditionS': `${this.formData.nameCondit}`,
            'sex': `${this.selected}`,
            'tipoAspirant': `B`,
            'fatherTutor': [
              {
                'name': `${this.formData.namePadTutor1}`,
                'lastNameP': `${this.formData.apePaternoPadTutor1}`,
                'lastNameM': `${this.formData.apeMaternoPadTutor1}`,
                'phone1': `${this.formData.phone1PadTutor1}`,
                'phone2': `${this.formData.phone2PadTutor1}`,
                'email': `${this.email1.value}`
              },
              {
                'name': `${this.formData.namePadTutor2}`,
                'lastNameP': `${this.formData.apePaternoPadTutor2}`,
                'lastNameM': `${this.formData.apeMaternoPadTutor2}`,
                'phone1': `${this.formData.phone1PadTutor2}`,
                'phone2': `${this.formData.phone2PadTutor2}`,
                'email': `${this.email2.value}`
              }
            ],
            'address': {
              'street': `${this.formData.calleDir}`,
              'number': `${this.formData.numDir}`,
              'colony': `${this.formData.colDir}`,
              'municipality': `${this.formData.munDir}`,
              'postal_code': `${this.formData.codPDir}`,
            }
          };
          let asp = this.serviceAspirantService.postUpdate(aspirantPost).subscribe(
            (valor: number) => {
              let aspirantBasicPost: AspirantBasic = {
                'aspirant': {
                  'id': valor
                },
                'levelBasic': {
                  'id': parseInt(this.nivelBasic)
                }
              };
              this.serviceAspirantBasicServiceP.postUpdate(aspirantBasicPost).subscribe(
                (idAspBasic: number) => {
                  this.aspirantBasicServicePDF.getDataPDF(idAspBasic).subscribe(response => {
                    const blob = new Blob([response], { type: 'application/pdf' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    let i = (this.nivelBasic == ('' + 1)) ? 'Preescolar' : (this.nivelBasic == ('' + 2)) ? 'Primaria' : (this.nivelBasic == ('' + 3)) ? 'Secundaria' : 'null';
                    link.download = `preficha_${this.formData.apePaternoAsp}${this.formData.apeMaternoAsp}_${i}.pdf`;
                    link.click();
                    URL.revokeObjectURL(url);
                  });
                }
              );
            }
          );
          // window.location.href = 'https://udescartesresidenciaitste.000webhostapp.com/';
        }
      });
  }

  salir() {
    window.location.href = 'https://udescartesresidenciaitste.000webhostapp.com/';
  }
}

