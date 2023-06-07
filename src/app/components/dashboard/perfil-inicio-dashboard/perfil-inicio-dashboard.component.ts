import { Component, OnInit } from '@angular/core';
import { ServiceAdministrativeService } from 'src/app/service/administrative/service-administrative.service';
import { Administrative } from '../../../interface/adminitrastive_interface';

@Component({
  selector: 'app-perfil-inicio-dashboard',
  templateUrl: './perfil-inicio-dashboard.component.html',
  styleUrls: ['./perfil-inicio-dashboard.component.css']
})
export class PerfilInicioDashboardComponent implements OnInit {
  adminitrastive: Administrative = {
    id: 0,
    name: '',
    lastNameP: '',
    lastNameM: '',
    email: '',
    phone: '',
    password: ''
  };

  constructor(private serviceAdministrativeService: ServiceAdministrativeService) { }

  ngOnInit(): void {
    this.assignValueAdminitrastive();
  }

  assignValueAdminitrastive() {
    this.serviceAdministrativeService.getData().subscribe(
      {
        next: data => {
          this.adminitrastive = data;
        },
        error: error => {
          console.log("Error: " + error);
        }
      }
    );
  }

}
