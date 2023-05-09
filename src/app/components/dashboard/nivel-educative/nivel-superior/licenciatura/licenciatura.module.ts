import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenciaturaRoutingModule } from './licenciatura-routing.module';
import { LicenciaturaComponent } from './licenciatura.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { AspirantLicenciatureComponent } from './aspirant-licenciature/aspirant-licenciature.component';
import { ViewAspirantLicenciatureComponent } from './view-aspirant-licenciature/view-aspirant-licenciature.component';


@NgModule({
  declarations: [
    LicenciaturaComponent,
    AspirantLicenciatureComponent,
    ViewAspirantLicenciatureComponent
  ],
  imports: [
    CommonModule,
    LicenciaturaRoutingModule,
    SharedModule
  ]
})
export class LicenciaturaModule { }
