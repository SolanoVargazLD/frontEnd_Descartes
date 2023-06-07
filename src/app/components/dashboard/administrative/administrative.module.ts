import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrativeRoutingModule } from './administrative-routing.module';
import { AdministrativeComponent } from './administrative.component';
import { ViewAdministrativeComponent } from './view-administrative/view-administrative.component';
import { SharedModule } from '../../shared/shared.module';
import { AddAdministrativeComponent } from './add-administrative/add-administrative.component';


@NgModule({
  declarations: [
    AdministrativeComponent,
    ViewAdministrativeComponent,
    AddAdministrativeComponent
  ],
  imports: [
    CommonModule,
    AdministrativeRoutingModule,
    SharedModule
  ]
})
export class AdministrativeModule { }
