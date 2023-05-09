import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenciaturaRoutingModule } from './licenciatura-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ViewAspirantLicenciatureComponent } from './view-aspirant-licenciature/view-aspirant-licenciature.component';
import { ShowLicenciaturesComponent } from './show-licenciatures/show-licenciatures.component';
import { SelectLicenciatureComponent } from './show-licenciatures/select-licenciature/select-licenciature.component';


@NgModule({
  declarations: [
    ViewAspirantLicenciatureComponent,
    ShowLicenciaturesComponent,
    SelectLicenciatureComponent
  ],
  imports: [
    CommonModule,
    LicenciaturaRoutingModule,
    SharedModule
  ]
})
export class LicenciaturaModule { }
