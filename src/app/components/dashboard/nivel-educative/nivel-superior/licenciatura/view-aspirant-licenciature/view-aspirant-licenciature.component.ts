import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AspirantLicenciatureData } from 'src/app/interface/aspirant_Licenciature_data';
import { ServiceIdLicenciatureService } from 'src/app/service/share_Inf/superior/licenciature/service-id-licenciature.service';
import { ServiceviewAspirantsLicenciatureService } from '../../../../../../service/aspirantSuperior/licenciature/edit_licenciature/serviceview-aspirants-licenciature.service';

@Component({
  selector: 'app-view-aspirant-licenciature',
  templateUrl: './view-aspirant-licenciature.component.html',
  styleUrls: ['./view-aspirant-licenciature.component.css']
})
export class ViewAspirantLicenciatureComponent implements OnInit {

  dataAspirantLic: AspirantLicenciatureData = {
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

  constructor(private serviceIdLicenciatureService: ServiceIdLicenciatureService,
    private serviceviewAspirantsLicenciatureService: ServiceviewAspirantsLicenciatureService,
    private router: Router) { }

  ngOnInit(): void {
    if (
      this.serviceIdLicenciatureService.getIdAspirant() == 0) {
      this.router.navigateByUrl(`/dashboard/NivelLicenciature`);
    }
    this.assignValueAspirant();
  }

  assignValueAspirant() {
    this.serviceviewAspirantsLicenciatureService.getAspirantLicenciature(this.serviceIdLicenciatureService.getIdAspirantLicenciature()).subscribe(
      {
        next: data => {
          this.dataAspirantLic = data;
        },
        error: error => {
          console.log("Error: " + error);
        }
      }
    );
  }

  goBack(): void {
    this.router.navigate([`/dashboard/NivelLicenciature`]);
  }
}
