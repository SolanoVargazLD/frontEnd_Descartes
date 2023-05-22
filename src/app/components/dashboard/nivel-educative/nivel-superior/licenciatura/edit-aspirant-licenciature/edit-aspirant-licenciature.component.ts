import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { putAspirantDTO } from 'src/app/interface/aspirant_interface';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';

import Swal from 'sweetalert2';
import { AspirantLicenciatureData, AspirantLicenciatureDataDAO } from 'src/app/interface/aspirant_Licenciature_data';
import { ServiceIdLicenciatureService } from 'src/app/service/share_Inf/superior/licenciature/service-id-licenciature.service';
import { ServiceviewAspirantsLicenciatureService } from '../../../../../../service/aspirantSuperior/licenciature/edit_licenciature/serviceview-aspirants-licenciature.service';

@Component({
  selector: 'app-edit-aspirant-licenciature',
  templateUrl: './edit-aspirant-licenciature.component.html',
  styleUrls: ['./edit-aspirant-licenciature.component.css']
})
export class EditAspirantLicenciatureComponent  implements OnInit {
  dataAspirantLic:AspirantLicenciatureData= {
    id: 0,
    schoolOrigin: "",
    phone: "",
    email: "",
    aspirant: {
      id: 0,
      name: "",
      lastNameP: "",
      lastNameM: "",
      curp: "",
      bloodType: "",
      conditionS: "",
      sex: "",
      tipoAspirant: "",
      fatherTutor: [],
      address: {
        id: 0,
        street: "",
        number: "",
        colony: "",
        municipality: "",
        postal_code: ""
      }
    },
    levelHigher: {
      id: 0,
      name_career: '',
      keyCareer: '',
      nivel_educative: '',
      img: '',
      pdf: ''
    }
  };

  dataAspirantLicDAO: AspirantLicenciatureDataDAO= {
    schoolOrigin: "",
    phone: "",
    email: "",
  };

  constructor(private serviceAspirantService: ServiceAspirantService,
    private serviceIdLicenciatureService: ServiceIdLicenciatureService,
    private serviceviewAspirantsLicenciatureService: ServiceviewAspirantsLicenciatureService,
    private router: Router,){}

  ngOnInit(): void {
    if(this.serviceIdLicenciatureService.getIdAspirant()==0){
      this.router.navigateByUrl(`/dashboard/NivelLicenciature`, { skipLocationChange: true });
    }
    this.assignValueAspirant();
  }

  assignValueAspirant() {
    this.serviceviewAspirantsLicenciatureService.getAspirantLicenciature(this.serviceIdLicenciatureService.getIdAspirantLicenciature()).subscribe(
      {
        next:data=>{
          this.dataAspirantLic= data;
        },
        error:error =>{
          console.log("Error: "+error);
        }
      }
    );
  }

  goBack(): void {
    this.router.navigate([`/dashboard/NivelLicenciature`]);
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
        let aspirant: putAspirantDTO;

        let aspirantBach: AspirantLicenciatureDataDAO = {
          schoolOrigin: form.value.schoolOriginAspirantBachillerate != '' ? `${form.value.schoolOriginAspirantBachillerate}`: `${this.dataAspirantLic.schoolOrigin}`,
          phone: form.value.phoneAspirantBachillerate != '' ? `${form.value.phoneAspirantBachillerate}`: `${this.dataAspirantLic.phone}`,
          email: form.value.emailAspirantBachillerate != '' ? `${form.value.emailAspirantBachillerate}`: `${this.dataAspirantLic.email}`,
        };
        if (this.dataAspirantLic.aspirant.fatherTutor.length != 1) {
          aspirant= {
            "name": form.value.nameAsp != '' ? `${form.value.nameAsp}` : `${this.dataAspirantLic.aspirant.name}`,
            "lastNameP": form.value.lastNamePAsp != '' ? `${form.value.lastNamePAsp}` : `${this.dataAspirantLic.aspirant.lastNameP}`,
            "lastNameM": form.value.lastNameMAsp != '' ? `${form.value.lastNameMAsp}` : `${this.dataAspirantLic.aspirant.lastNameM}`,
            "curp": form.value.curpAsp != '' ? `${form.value.curpAsp}` : `${this.dataAspirantLic.aspirant.curp}`,
            "bloodType": form.value.tSangreAsp != '' ? `${form.value.tSangreAsp}` : `${this.dataAspirantLic.aspirant.bloodType}`,
            "conditionS": form.value.conditAsp != '' ? `${form.value.conditAsp}` : `${this.dataAspirantLic.aspirant.conditionS}`,
            "sex": form.value.sexAsp != '' ? `${form.value.sexAsp}` : `${this.dataAspirantLic.aspirant.sex}`,
            "tipoAspirant": this.dataAspirantLic.aspirant.tipoAspirant,
            "address": {
              "id": this.dataAspirantLic.aspirant.address.id,
              "street": form.value.streetAspAdr != '' ? `${form.value.streetAspAdr}` : `${this.dataAspirantLic.aspirant.address.street}`,
              "number": form.value.numberAspAdr != '' ? `${form.value.numberAspAdr}` : `${this.dataAspirantLic.aspirant.address.number}`,
              "colony": form.value.colonyAspAdr != '' ? `${form.value.colonyAspAdr}` : `${this.dataAspirantLic.aspirant.address.colony}`,
              "municipality": form.value.municipalyAspAdr != '' ? `${form.value.municipalyAspAdr}` : `${this.dataAspirantLic.aspirant.address.municipality}`,
              "postal_code": form.value.postalAspAdr != '' ? `${form.value.postalAspAdr}` : `${this.dataAspirantLic.aspirant.address.postal_code}`
            },
            "fatherTutor": [
              {
                "id": this.dataAspirantLic.aspirant.fatherTutor[0].id,
                "name": form.value.NameFather0 != '' ? `${form.value.NameFather0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].name}`,
                "lastNameP": form.value.lastNamePFather0 != '' ? `${form.value.lastNamePFather0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].lastNameP}`,
                "lastNameM": form.value.lastNameMFather0 != '' ? `${form.value.lastNameMFather0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].lastNameM}`,
                "phone1": form.value.phone1Father0 != '' ? `${form.value.phone1Father0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].phone1}`,
                "phone2": form.value.phone2Father0 != '' ? `${form.value.phone2Father0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].phone2}`,
                "email": form.value.emailFather0 != '' ? `${form.value.emailFather0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].email}`
              },
              {
                "id": this.dataAspirantLic.aspirant.fatherTutor[1].id,
                "name": form.value.NameFather1 != '' ? `${form.value.NameFather1}` : `${this.dataAspirantLic.aspirant.fatherTutor[1].name}`,
                "lastNameP": form.value.lastNamePFather1 != '' ? `${form.value.lastNamePFather1}` : `${this.dataAspirantLic.aspirant.fatherTutor[1].lastNameP}`,
                "lastNameM": form.value.lastNameMFather1 != '' ? `${form.value.lastNameMFather1}` : `${this.dataAspirantLic.aspirant.fatherTutor[1].lastNameM}`,
                "phone1": form.value.phone1Father1 != '' ? `${form.value.phone1Father1}` : `${this.dataAspirantLic.aspirant.fatherTutor[1].phone1}`,
                "phone2": form.value.phone2Father1 != '' ? `${form.value.phone2Father1}` : `${this.dataAspirantLic.aspirant.fatherTutor[1].phone2}`,
                "email": form.value.emailFather1 != '' ? `${form.value.emailFather1}` : `${this.dataAspirantLic.aspirant.fatherTutor[1].email}`
              }
            ]
          }
        } else {
          aspirant= {
            "name": form.value.nameAsp != '' ? `${form.value.nameAsp}` : `${this.dataAspirantLic.aspirant.name}`,
            "lastNameP": form.value.lastNamePAsp != '' ? `${form.value.lastNamePAsp}` : `${this.dataAspirantLic.aspirant.lastNameP}`,
            "lastNameM": form.value.lastNameMAsp != '' ? `${form.value.lastNameMAsp}` : `${this.dataAspirantLic.aspirant.lastNameM}`,
            "curp": form.value.curpAsp != '' ? `${form.value.curpAsp}` : `${this.dataAspirantLic.aspirant.curp}`,
            "bloodType": form.value.tSangreAsp != '' ? `${form.value.tSangreAsp}` : `${this.dataAspirantLic.aspirant.bloodType}`,
            "conditionS": form.value.conditAsp != '' ? `${form.value.conditAsp}` : `${this.dataAspirantLic.aspirant.conditionS}`,
            "sex": form.value.sexAsp != '' ? `${form.value.sexAsp}` : `${this.dataAspirantLic.aspirant.sex}`,
            "tipoAspirant": this.dataAspirantLic.aspirant.tipoAspirant,
            "address": {
              "id": this.dataAspirantLic.aspirant.address.id,
              "street": form.value.streetAspAdr != '' ? `${form.value.streetAspAdr}` : `${this.dataAspirantLic.aspirant.address.street}`,
              "number": form.value.numberAspAdr != '' ? `${form.value.numberAspAdr}` : `${this.dataAspirantLic.aspirant.address.number}`,
              "colony": form.value.colonyAspAdr != '' ? `${form.value.colonyAspAdr}` : `${this.dataAspirantLic.aspirant.address.colony}`,
              "municipality": form.value.municipalyAspAdr != '' ? `${form.value.municipalyAspAdr}` : `${this.dataAspirantLic.aspirant.address.municipality}`,
              "postal_code": form.value.postalAspAdr != '' ? `${form.value.postalAspAdr}` : `${this.dataAspirantLic.aspirant.address.postal_code}`
            },
            "fatherTutor": [
              {
                "id": this.dataAspirantLic.aspirant.fatherTutor[0].id,
                "name": form.value.NameFather0 != '' ? `${form.value.NameFather0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].name}`,
                "lastNameP": form.value.lastNamePFather0 != '' ? `${form.value.lastNamePFather0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].lastNameP}`,
                "lastNameM": form.value.lastNameMFather0 != '' ? `${form.value.lastNameMFather0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].lastNameM}`,
                "phone1": form.value.phone1Father0 != '' ? `${form.value.phone1Father0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].phone1}`,
                "phone2": form.value.phone2Father0 != '' ? `${form.value.phone2Father0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].phone2}`,
                "email": form.value.emailFather0 != '' ? `${form.value.emailFather0}` : `${this.dataAspirantLic.aspirant.fatherTutor[0].email}`
              }
            ]
          }
        };
        this.serviceviewAspirantsLicenciatureService.putAspirantLicenciature(this.serviceIdLicenciatureService.getIdAspirantLicenciature(), aspirantBach).subscribe(
            () => {
              this.serviceAspirantService.putUpdate(this.serviceIdLicenciatureService.getIdAspirant(), aspirant).subscribe(
                  ()=>{
                    this.router.navigateByUrl(`/dashboard/NivelLicenciature`, { skipLocationChange: true });
                  }
                )
            }
          );

        Swal.fire(
          'Modificado',
          'Aspirante Modificado de la lista',
          'success'
        );
      }
      // else{
      //   this.router.navigate([`/dashboard/NivelBachillerate`]);
      // }
    });
  }
}
