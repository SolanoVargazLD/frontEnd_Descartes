import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Aspirant } from 'src/app/interface/aspirant_interface';
import { ServiceIdAspirantService } from 'src/app/service/share_Inf/service-id-aspirant.service';

import Swal from 'sweetalert2';
import { putAspirantDTO } from '../../../../../interface/aspirant_interface';

@Component({
  selector: 'app-modify-data-aspirant-basic',
  templateUrl: './modify-data-aspirant-basic.component.html',
  styleUrls: ['./modify-data-aspirant-basic.component.css']
})
export class ModifyDataAspirantBasicComponent implements OnInit {
  dataAspirant: Aspirant = {
    id: 0,
    name: '',
    lastNameP: '',
    lastNameM: '',
    curp: '',
    bloodType: '',
    conditionS: '',
    tipoAspirant: '',
    sex: '',
    fatherTutor: [],
    address: {
      id: 0,
      street: '',
      number: '',
      colony: '',
      municipality: '',
      postal_code: ''
    }
  };
  putAspirant: putAspirantDTO = {
    name: '',
    lastNameP: '',
    lastNameM: '',
    curp: '',
    bloodType: '',
    conditionS: '',
    tipoAspirant: '',
    sex: '',
    putFatherTutorDTO: [],
    putAdressDTO: {
      street: '',
      number: '',
      colony: '',
      municipality: '',
      postal_code: ''
    }
  };

  public nombre: string = '';

  constructor(private serviceSharedAspirant: ServiceIdAspirantService, private router: Router) { }

  ngOnInit(): void {
    this.assignValueAspirant();
  }

  assignValueAspirant() {
    this.serviceSharedAspirant.getData().subscribe(
      {
        next: data => {
          this.dataAspirant = data;
        },
        error: error => {
          console.log("Error: " + error);
        }
      }
    );
  }

  goBack(): void {
    console.log(this.dataAspirant.fatherTutor.length);
    this.router.navigate(['/dashboard/Preescolar']);
  }

  openDialog(): void {

  }

  saveData(form: NgForm): void {
    Swal.fire({
      title: 'ADVERTENCIA',
      text: `Esta seguro(a) de Modificar los datos.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2a53c4',
      cancelButtonColor: '#ff3a3a',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // &

        let aspirant = null;

        if (this.dataAspirant.fatherTutor.length != 1) {
          aspirant = {
            "name": form.value.nameAsp != '' ? `${form.value.nameAsp}` : `${this.dataAspirant.name}`,
            "lastNameP": form.value.lastNamePAsp != '' ? `${form.value.lastNamePAsp}` : `${this.dataAspirant.lastNameP}`,
            "lastNameM": form.value.lastNameMAsp != '' ? `${form.value.lastNameMAsp}` : `${this.dataAspirant.lastNameM}`,
            "curp": form.value.curpAsp != '' ? `${form.value.curpAsp}` : `${this.dataAspirant.curp}`,
            "bloodType": form.value.tSangreAsp != '' ? `${form.value.tSangreAsp}` : `${this.dataAspirant.bloodType}`,
            "conditionS": form.value.conditAsp != '' ? `${form.value.conditAsp}` : `${this.dataAspirant.conditionS}`,
            "sex": form.value.sexAsp != '' ? `${form.value.sexAsp}` : `${this.dataAspirant.sex}`,
            "tipoAspirant": this.dataAspirant.tipoAspirant,
            "address": {
              "street": form.value.streetAspAdr != '' ? `${form.value.streetAspAdr}` : `${this.dataAspirant.address.street}`,
              "number": form.value.numberAspAdr != '' ? `${form.value.numberAspAdr}` : `${this.dataAspirant.address.number}`,
              "colony": form.value.colonyAspAdr != '' ? `${form.value.colonyAspAdr}` : `${this.dataAspirant.address.colony}`,
              "municipality": form.value.municipalyAspAdr != '' ? `${form.value.municipalyAspAdr}` : `${this.dataAspirant.address.municipality}`,
              "postal_code": form.value.postalAspAdr != '' ? `${form.value.postalAspAdr}` : `${this.dataAspirant.address.postal_code}`
            },
            "fatherTutor": [
              {
                "name": form.value.NameFather0 != '' ? `${form.value.NameFather0}` : `${this.dataAspirant.fatherTutor[0].name}`,
                "lastNameP": form.value.lastNamePFather0 != '' ? `${form.value.lastNamePFather0}` : `${this.dataAspirant.fatherTutor[0].lastNameP}`,
                "lastNameM": form.value.lastNameMFather0 != '' ? `${form.value.lastNameMFather1}` : `${this.dataAspirant.fatherTutor[0].lastNameM}`,
                "phone1": form.value.phone1Father0 != '' ? `${form.value.phone1Father0}` : `${this.dataAspirant.fatherTutor[0].phone1}`,
                "phone2": form.value.phone2Father0 != '' ? `${form.value.phone2Father0}` : `${this.dataAspirant.fatherTutor[0].phone2}`,
                "email": form.value.emailFather0 != '' ? `${form.value.emailFather0}` : `${this.dataAspirant.fatherTutor[0].email}`
              },
              {
                "name": form.value.NameFather1 != '' ? `${form.value.NameFather1}` : `${this.dataAspirant.fatherTutor[1].name}`,
                "lastNameP": form.value.lastNamePFather1 != '' ? `${form.value.lastNamePFather1}` : `${this.dataAspirant.fatherTutor[1].lastNameP}`,
                "lastNameM": form.value.lastNameMFather1 != '' ? `${form.value.streetAspAdr}` : `${this.dataAspirant.fatherTutor[1].lastNameM}`,
                "phone1": form.value.phone1Father1 != '' ? `${form.value.phone1Father1}` : `${this.dataAspirant.fatherTutor[1].phone1}`,
                "phone2": form.value.phone2Father1 != '' ? `${form.value.phone2Father1}` : `${this.dataAspirant.fatherTutor[1].phone2}`,
                "email": form.value.emailFather1 != '' ? `${form.value.emailFather1}` : `${this.dataAspirant.fatherTutor[1].email}`
              }
            ]
          };
        } else {
          aspirant = {
            "name": form.value.nameAsp != '' ? `${form.value.nameAsp}` : `${this.dataAspirant.name}`,
            "lastNameP": form.value.lastNamePAsp != '' ? `${form.value.lastNamePAsp}` : `${this.dataAspirant.lastNameP}`,
            "lastNameM": form.value.lastNameMAsp != '' ? `${form.value.lastNameMAsp}` : `${this.dataAspirant.lastNameM}`,
            "curp": form.value.curpAsp != '' ? `${form.value.curpAsp}` : `${this.dataAspirant.curp}`,
            "bloodType": form.value.tSangreAsp != '' ? `${form.value.tSangreAsp}` : `${this.dataAspirant.bloodType}`,
            "conditionS": form.value.conditAsp != '' ? `${form.value.conditAsp}` : `${this.dataAspirant.conditionS}`,
            "sex": form.value.sexAsp != '' ? `${form.value.sexAsp}` : `${this.dataAspirant.sex}`,
            "tipoAspirant":  this.dataAspirant.tipoAspirant,
            "address": {
              "street": form.value.streetAspAdr != '' ? `${form.value.streetAspAdr}` : `${this.dataAspirant.address.street}`,
              "number": form.value.numberAspAdr != '' ? `${form.value.numberAspAdr}` : `${this.dataAspirant.address.number}`,
              "colony": form.value.colonyAspAdr != '' ? `${form.value.colonyAspAdr}` : `${this.dataAspirant.address.colony}`,
              "municipality": form.value.municipalyAspAdr != '' ? `${form.value.municipalyAspAdr}` : `${this.dataAspirant.address.municipality}`,
              "postal_code": form.value.postalAspAdr != '' ? `${form.value.postalAspAdr}` : `${this.dataAspirant.address.postal_code}`
            },
            "fatherTutor": [
              {
                "name": form.value.NameFather0 != '' ? `${form.value.NameFather0}` : `${this.dataAspirant.fatherTutor[0].name}`,
                "lastNameP": form.value.lastNamePFather0 != '' ? `${form.value.lastNamePFather0}` : `${this.dataAspirant.fatherTutor[0].lastNameP}`,
                "lastNameM": form.value.lastNameMFather0 != '' ? `${form.value.lastNameMFather1}` : `${this.dataAspirant.fatherTutor[0].lastNameM}`,
                "phone1": form.value.phone1Father0 != '' ? `${form.value.phone1Father0}` : `${this.dataAspirant.fatherTutor[0].phone1}`,
                "phone2": form.value.phone2Father0 != '' ? `${form.value.phone2Father0}` : `${this.dataAspirant.fatherTutor[0].phone2}`,
                "email": form.value.emailFather0 != '' ? `${form.value.emailFather0}` : `${this.dataAspirant.fatherTutor[0].email}`
              }
            ]
          };
        };
        console.log("post");
        console.log(aspirant);
        console.log(this.dataAspirant.id);
        this.serviceSharedAspirant.putUpdate(this.dataAspirant.id, aspirant).subscribe;

        // &
        Swal.fire(
          'Modificado',
          'Aspirante Modificado de la lista',
          'success'
        )
      }
      this.router.navigate(['/dashboard/Preescolar']);
    })
  }
}
