import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosgradoRoutingModule } from './posgrado-routing.module';
import { PosgradoComponent } from './posgrado.component';
import { ShowPosgradoComponent } from './show-posgrado/show-posgrado.component';
import { SelectMaestriaDoctoradoComponent } from './show-posgrado/select-maestria-doctorado/select-maestria-doctorado.component';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  declarations: [
    PosgradoComponent,
    ShowPosgradoComponent,
    SelectMaestriaDoctoradoComponent
  ],
  imports: [
    CommonModule,
    PosgradoRoutingModule,
    SharedModule
  ]
})
export class PosgradoModule { }
