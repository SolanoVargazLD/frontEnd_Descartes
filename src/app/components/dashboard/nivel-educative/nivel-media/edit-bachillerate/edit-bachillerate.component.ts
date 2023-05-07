import { ServiceIdBachillerAspirantService } from './../../../../../service/share_Inf/media/service-id-bachiller-aspirant.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AspirantBachillerate, AspirantBachillerateDAO } from 'src/app/interface/aspirantbachillerate_view_interface';
import { ServiceViewAspirantBachillerateService } from 'src/app/service/aspirantBachillerate/viewAspirantBachillerate/service-view-aspirant-bachillerate.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-bachillerate',
  templateUrl: './edit-bachillerate.component.html',
  styleUrls: ['./edit-bachillerate.component.css']
})
export class EditBachillerateComponent implements OnInit {
  dataAspirantBachillerate: AspirantBachillerate= {
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
    levelUpperMiddle: {
      id: 0,
      name: "",
      level: "",
      img: ""
    }
  };

  dataAspirantBachillerateDAO: AspirantBachillerateDAO= {
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
    levelUpperMiddle: {
      id: 0,
      name: "",
      level: "",
      img: ""
    }
  };

  constructor(
    private serviceViewAspirantBachillerateService : ServiceViewAspirantBachillerateService,
    private serviceIdBachillerAspirantService: ServiceIdBachillerAspirantService,
    private router: Router,){}

  ngOnInit(): void {
    if(this.serviceIdBachillerAspirantService.getIdAspirant()==0){
      this.router.navigateByUrl(`/dashboard/NivelBachillerate`, { skipLocationChange: true });
    }
    this.assignValueAspirant();
  }

  assignValueAspirant() {
    this.serviceViewAspirantBachillerateService.getAspirantBachillerate(this.serviceIdBachillerAspirantService.getIdAspirantBachiller()).subscribe(
      {
        next:data=>{
          this.dataAspirantBachillerate= data;
        },
        error:error =>{
          console.log("Error: "+error);
        }
      }
    );
  }

  goBack(): void {
    this.router.navigate([`/dashboard/NivelBachillerate`]);
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
        let aspirantBach: AspirantBachillerateDAO;
        if (this.dataAspirantBachillerate.aspirant.fatherTutor.length != 1) {
          aspirantBach= {
            schoolOrigin: form.value.schoolOriginAspirantBachillerate != '' ? `${form.value.schoolOriginAspirantBachillerate}`: `${this.dataAspirantBachillerate.schoolOrigin}`,
            phone: form.value.phoneAspirantBachillerate != '' ? `${form.value.phoneAspirantBachillerate}`: `${this.dataAspirantBachillerate.phone}`,
            email: form.value.emailAspirantBachillerate != '' ? `${form.value.emailAspirantBachillerate}`: `${this.dataAspirantBachillerate.email}`,
            aspirant: {
            "id": this.dataAspirantBachillerate.aspirant.id  ,
            "name": form.value.nameAsp != '' ? `${form.value.nameAsp}` : `${this.dataAspirantBachillerate.aspirant.name}`,
            "lastNameP": form.value.lastNamePAsp != '' ? `${form.value.lastNamePAsp}` : `${this.dataAspirantBachillerate.aspirant.lastNameP}`,
            "lastNameM": form.value.lastNameMAsp != '' ? `${form.value.lastNameMAsp}` : `${this.dataAspirantBachillerate.aspirant.lastNameM}`,
            "curp": form.value.curpAsp != '' ? `${form.value.curpAsp}` : `${this.dataAspirantBachillerate.aspirant.curp}`,
            "bloodType": form.value.tSangreAsp != '' ? `${form.value.tSangreAsp}` : `${this.dataAspirantBachillerate.aspirant.bloodType}`,
            "conditionS": form.value.conditAsp != '' ? `${form.value.conditAsp}` : `${this.dataAspirantBachillerate.aspirant.conditionS}`,
            "sex": form.value.sexAsp != '' ? `${form.value.sexAsp}` : `${this.dataAspirantBachillerate.aspirant.sex}`,
            "tipoAspirant": this.dataAspirantBachillerate.aspirant.tipoAspirant,
            "address": {
              "id": this.dataAspirantBachillerate.aspirant.address.id,
              "street": form.value.streetAspAdr != '' ? `${form.value.streetAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.street}`,
              "number": form.value.numberAspAdr != '' ? `${form.value.numberAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.number}`,
              "colony": form.value.colonyAspAdr != '' ? `${form.value.colonyAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.colony}`,
              "municipality": form.value.municipalyAspAdr != '' ? `${form.value.municipalyAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.municipality}`,
              "postal_code": form.value.postalAspAdr != '' ? `${form.value.postalAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.postal_code}`
            },
            "fatherTutor": [
              {
                "id": this.dataAspirantBachillerate.aspirant.fatherTutor[0].id,
                "name": form.value.NameFather0 != '' ? `${form.value.NameFather0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].name}`,
                "lastNameP": form.value.lastNamePFather0 != '' ? `${form.value.lastNamePFather0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].lastNameP}`,
                "lastNameM": form.value.lastNameMFather0 != '' ? `${form.value.lastNameMFather0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].lastNameM}`,
                "phone1": form.value.phone1Father0 != '' ? `${form.value.phone1Father0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].phone1}`,
                "phone2": form.value.phone2Father0 != '' ? `${form.value.phone2Father0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].phone2}`,
                "email": form.value.emailFather0 != '' ? `${form.value.emailFather0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].email}`
              },
              {
                "id": this.dataAspirantBachillerate.aspirant.fatherTutor[1].id,
                "name": form.value.NameFather1 != '' ? `${form.value.NameFather1}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[1].name}`,
                "lastNameP": form.value.lastNamePFather1 != '' ? `${form.value.lastNamePFather1}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[1].lastNameP}`,
                "lastNameM": form.value.lastNameMFather1 != '' ? `${form.value.lastNameMFather1}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[1].lastNameM}`,
                "phone1": form.value.phone1Father1 != '' ? `${form.value.phone1Father1}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[1].phone1}`,
                "phone2": form.value.phone2Father1 != '' ? `${form.value.phone2Father1}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[1].phone2}`,
                "email": form.value.emailFather1 != '' ? `${form.value.emailFather1}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[1].email}`
              }
            ]
          },
            levelUpperMiddle: {
              "id": this.dataAspirantBachillerate.levelUpperMiddle.id,
              "name": this.dataAspirantBachillerate.levelUpperMiddle.name,
              "level": this.dataAspirantBachillerate.levelUpperMiddle.level,
              "img": this.dataAspirantBachillerate.levelUpperMiddle.img
            }
          };
        } else {
          aspirantBach= {
            schoolOrigin: form.value.schoolOriginAspirantBachillerate != '' ? `${form.value.schoolOriginAspirantBachillerate}`: `${this.dataAspirantBachillerate.schoolOrigin}`,
            phone: form.value.phoneAspirantBachillerate != '' ? `${form.value.phoneAspirantBachillerate}`: `${this.dataAspirantBachillerate.phone}`,
            email: form.value.emailAspirantBachillerate != '' ? `${form.value.emailAspirantBachillerate}`: `${this.dataAspirantBachillerate.email}`,
            aspirant: {
            "id": this.dataAspirantBachillerate.aspirant.id  ,
            "name": form.value.nameAsp != '' ? `${form.value.nameAsp}` : `${this.dataAspirantBachillerate.aspirant.name}`,
            "lastNameP": form.value.lastNamePAsp != '' ? `${form.value.lastNamePAsp}` : `${this.dataAspirantBachillerate.aspirant.lastNameP}`,
            "lastNameM": form.value.lastNameMAsp != '' ? `${form.value.lastNameMAsp}` : `${this.dataAspirantBachillerate.aspirant.lastNameM}`,
            "curp": form.value.curpAsp != '' ? `${form.value.curpAsp}` : `${this.dataAspirantBachillerate.aspirant.curp}`,
            "bloodType": form.value.tSangreAsp != '' ? `${form.value.tSangreAsp}` : `${this.dataAspirantBachillerate.aspirant.bloodType}`,
            "conditionS": form.value.conditAsp != '' ? `${form.value.conditAsp}` : `${this.dataAspirantBachillerate.aspirant.conditionS}`,
            "sex": form.value.sexAsp != '' ? `${form.value.sexAsp}` : `${this.dataAspirantBachillerate.aspirant.sex}`,
            "tipoAspirant": this.dataAspirantBachillerate.aspirant.tipoAspirant,
            "address": {
              "id": this.dataAspirantBachillerate.aspirant.address.id,
              "street": form.value.streetAspAdr != '' ? `${form.value.streetAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.street}`,
              "number": form.value.numberAspAdr != '' ? `${form.value.numberAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.number}`,
              "colony": form.value.colonyAspAdr != '' ? `${form.value.colonyAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.colony}`,
              "municipality": form.value.municipalyAspAdr != '' ? `${form.value.municipalyAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.municipality}`,
              "postal_code": form.value.postalAspAdr != '' ? `${form.value.postalAspAdr}` : `${this.dataAspirantBachillerate.aspirant.address.postal_code}`
            },
            "fatherTutor": [
              {
                "id": this.dataAspirantBachillerate.aspirant.fatherTutor[0].id,
                "name": form.value.NameFather0 != '' ? `${form.value.NameFather0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].name}`,
                "lastNameP": form.value.lastNamePFather0 != '' ? `${form.value.lastNamePFather0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].lastNameP}`,
                "lastNameM": form.value.lastNameMFather0 != '' ? `${form.value.lastNameMFather0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].lastNameM}`,
                "phone1": form.value.phone1Father0 != '' ? `${form.value.phone1Father0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].phone1}`,
                "phone2": form.value.phone2Father0 != '' ? `${form.value.phone2Father0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].phone2}`,
                "email": form.value.emailFather0 != '' ? `${form.value.emailFather0}` : `${this.dataAspirantBachillerate.aspirant.fatherTutor[0].email}`
              }
            ]
          },
            levelUpperMiddle: {
              "id": this.dataAspirantBachillerate.levelUpperMiddle.id,
              "name": this.dataAspirantBachillerate.levelUpperMiddle.name,
              "level": this.dataAspirantBachillerate.levelUpperMiddle.level,
              "img": this.dataAspirantBachillerate.levelUpperMiddle.img
            }
          };
        };
        console.log(aspirantBach);
        console.log("-------");
        console.log(this.serviceIdBachillerAspirantService.getIdAspirantBachiller());

        this.serviceViewAspirantBachillerateService.putAspirantBachillerate(this.serviceIdBachillerAspirantService.getIdAspirantBachiller(), aspirantBach).subscribe(
            () => {
              this.router.navigateByUrl(`/dashboard/NivelBachillerate`, { skipLocationChange: true });
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
