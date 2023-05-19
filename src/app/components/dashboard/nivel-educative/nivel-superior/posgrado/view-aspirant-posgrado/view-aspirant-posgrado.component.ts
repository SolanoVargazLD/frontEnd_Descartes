import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AspirantPosgradoData } from 'src/app/interface/aspirant_posgrado_data';
import { ServicioAspirantPosgradoService } from 'src/app/service/aspirantSuperior/posgrado/view-posgrado/servicio-aspirant-posgrado.service';
import { ServicioIdPosgradoService } from 'src/app/service/share_Inf/superior/posgrado/servicio-id-posgrado.service';

@Component({
  selector: 'app-view-aspirant-posgrado',
  templateUrl: './view-aspirant-posgrado.component.html',
  styleUrls: ['./view-aspirant-posgrado.component.css']
})
export class ViewAspirantPosgradoComponent implements OnInit {

  dataNivel:string;
  dataPost: string;
  dataAspirantPos: AspirantPosgradoData = {
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

  constructor(private servicioIdPosgradoService: ServicioIdPosgradoService,
    private servicioAspirantPosgradoService: ServicioAspirantPosgradoService,
    private router: Router) {
      this.dataNivel= servicioIdPosgradoService.getSelectedNivel();
      this.dataPost= servicioIdPosgradoService.getSelectedPosgrad();
    }

  ngOnInit(): void {
    if (
      this.servicioIdPosgradoService.getIdAspirant() == 0) {
      this.router.navigateByUrl(`/dashboard/NivelPosgrado`);
    }
    this.assignValueAspirant();
  }

  assignValueAspirant() {
    this.servicioAspirantPosgradoService.getAspirantPosgrado(this.servicioIdPosgradoService.getIdAspirantPosgrado()) .subscribe(
      {
        next: data => {
          this.dataAspirantPos = data;
        },
        error: error => {
          console.log("Error: " + error);
        }
      }
    );
  }

  goBack(): void {
    this.router.navigate([`/dashboard/NivelPosgrado`]);
  }
}
