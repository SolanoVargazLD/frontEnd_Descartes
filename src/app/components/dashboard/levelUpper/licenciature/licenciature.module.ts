import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LicenciatureRoutingModule } from './licenciature-routing.module';
import { LicenciatureComponent } from './licenciature.component';
import { ViewLicenciatureComponent } from './view-licenciature/view-licenciature.component';
import { AddLicenciatureComponent } from './add-licenciature/add-licenciature.component';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  declarations: [
    LicenciatureComponent,
    ViewLicenciatureComponent,
    AddLicenciatureComponent
  ],
  imports: [
    CommonModule,
    LicenciatureRoutingModule,
    SharedModule
  ]
})
export class LicenciatureModule { }
