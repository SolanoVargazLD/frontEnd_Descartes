import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { putAspirantDTO } from 'src/app/interface/aspirant_interface';
import { ServiceAspirantService } from 'src/app/service/aspirant/service-aspirant.service';

import Swal from 'sweetalert2';
import { AspirantPosgradoData } from 'src/app/interface/aspirant_posgrado_data';
import { AspirantPosgradoDataDAO } from '../../../../../../interface/aspirant_posgrado_data';
import { ServicioIdPosgradoService } from '../../../../../../service/share_Inf/superior/posgrado/servicio-id-posgrado.service';
import { ServiceEditPosgradoService } from '../../../../../../service/aspirantSuperior/posgrado/edit-posgrado/service-edit-posgrado.service';

@Component({
  selector: 'app-edit-aspirant-posgrado',
  templateUrl: './edit-aspirant-posgrado.component.html',
  styleUrls: ['./edit-aspirant-posgrado.component.css']
})
export class EditAspirantPosgradoComponent implements OnInit {
  dataAspirantPos:AspirantPosgradoData= {
    id: 0,
    professionalLicense: "",
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

  dataAspirantPosDAO: AspirantPosgradoDataDAO= {
    professionalLicense: "",
    phone: "",
    email: "",
  };

  constructor(private serviceAspirantService: ServiceAspirantService,
    private servicioIdPosgradoService: ServicioIdPosgradoService,
    private serviceEditPosgradoService: ServiceEditPosgradoService,
    private router: Router,){}

  ngOnInit(): void {
    if(this.servicioIdPosgradoService.getIdAspirant()==0){
      this.router.navigateByUrl(`/dashboard/NivelPosgrado`, { skipLocationChange: true });
    }
    this.assignValueAspirant();
  }

  assignValueAspirant() {
    this.serviceEditPosgradoService.getAspirantPostgrado(this.servicioIdPosgradoService.getIdAspirantPosgrado()).subscribe(
      {
        next:data=>{
          this.dataAspirantPos= data;
        },
        error:error =>{
          console.log("Error: "+error);
        }
      }
    );
  }

  goBack(): void {
    this.router.navigate([`/dashboard/NivelPosgrado`]);
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

        let aspirantBach: AspirantPosgradoDataDAO = {
          professionalLicense: form.value.professionalLicensePosgrado != '' ? `${form.value.professionalLicensePosgrado}`: `${this.dataAspirantPos.professionalLicense}`,
          phone: form.value.phoneAspirantPosgrado != '' ? `${form.value.phoneAspirantPosgrado}`: `${this.dataAspirantPos.phone}`,
          email: form.value.emailAspirantPosgrado != '' ? `${form.value.emailAspirantPosgrado}`: `${this.dataAspirantPos.email}`,
        };
        if (this.dataAspirantPos.aspirant.fatherTutor.length != 1) {
          aspirant= {
            "name": form.value.nameAsp != '' ? `${form.value.nameAsp}` : `${this.dataAspirantPos.aspirant.name}`,
            "lastNameP": form.value.lastNamePAsp != '' ? `${form.value.lastNamePAsp}` : `${this.dataAspirantPos.aspirant.lastNameP}`,
            "lastNameM": form.value.lastNameMAsp != '' ? `${form.value.lastNameMAsp}` : `${this.dataAspirantPos.aspirant.lastNameM}`,
            "curp": form.value.curpAsp != '' ? `${form.value.curpAsp}` : `${this.dataAspirantPos.aspirant.curp}`,
            "bloodType": form.value.tSangreAsp != '' ? `${form.value.tSangreAsp}` : `${this.dataAspirantPos.aspirant.bloodType}`,
            "conditionS": form.value.conditAsp != '' ? `${form.value.conditAsp}` : `${this.dataAspirantPos.aspirant.conditionS}`,
            "sex": form.value.sexAsp != '' ? `${form.value.sexAsp}` : `${this.dataAspirantPos.aspirant.sex}`,
            "tipoAspirant": this.dataAspirantPos.aspirant.tipoAspirant,
            "address": {
              "id": this.dataAspirantPos.aspirant.address.id,
              "street": form.value.streetAspAdr != '' ? `${form.value.streetAspAdr}` : `${this.dataAspirantPos.aspirant.address.street}`,
              "number": form.value.numberAspAdr != '' ? `${form.value.numberAspAdr}` : `${this.dataAspirantPos.aspirant.address.number}`,
              "colony": form.value.colonyAspAdr != '' ? `${form.value.colonyAspAdr}` : `${this.dataAspirantPos.aspirant.address.colony}`,
              "municipality": form.value.municipalyAspAdr != '' ? `${form.value.municipalyAspAdr}` : `${this.dataAspirantPos.aspirant.address.municipality}`,
              "postal_code": form.value.postalAspAdr != '' ? `${form.value.postalAspAdr}` : `${this.dataAspirantPos.aspirant.address.postal_code}`
            },
            "fatherTutor": [
              {
                "id": this.dataAspirantPos.aspirant.fatherTutor[0].id,
                "name": form.value.NameFather0 != '' ? `${form.value.NameFather0}` : `${this.dataAspirantPos.aspirant.fatherTutor[0].name}`,
                "lastNameP": form.value.lastNamePFather0 != '' ? `${form.value.lastNamePFather0}` : `${this.dataAspirantPos.aspirant.fatherTutor[0].lastNameP}`,
                "lastNameM": form.value.lastNameMFather0 != '' ? `${form.value.lastNameMFather0}` : `${this.dataAspirantPos.aspirant.fatherTutor[0].lastNameM}`,
                "phone1": form.value.phone1Father0 != '' ? `${form.value.phone1Father0}` : `${this.dataAspirantPos.aspirant.fatherTutor[0].phone1}`,
                "phone2": form.value.phone2Father0 != '' ? `${form.value.phone2Father0}` : `${this.dataAspirantPos.aspirant.fatherTutor[0].phone2}`,
                "email": form.value.emailFather0 != '' ? `${form.value.emailFather0}` : `${this.dataAspirantPos.aspirant.fatherTutor[0].email}`
              }
            ]
          }
        };
        console.log(this.dataAspirantPosDAO);
        console.log(this.dataAspirantPos);

        this.serviceEditPosgradoService.putAspirantPosgrade(this.servicioIdPosgradoService.getIdAspirantPosgrado(), aspirantBach).subscribe(
            () => {
              this.serviceAspirantService.putUpdate(this.servicioIdPosgradoService.getIdAspirant(), aspirant).subscribe(
                  ()=>{
                    this.router.navigateByUrl(`/dashboard/NivelPosgrado`, { skipLocationChange: true });
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
