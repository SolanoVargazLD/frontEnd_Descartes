import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PosgradoRoutingModule } from './posgrado-routing.module';
import { PosgradoComponent } from './posgrado.component';
import { ShowPosgradoComponent } from './show-posgrado/show-posgrado.component';
import { SelectMaestriaDoctoradoComponent } from './show-posgrado/select-maestria-doctorado/select-maestria-doctorado.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ViewAspirantPosgradoComponent } from './view-aspirant-posgrado/view-aspirant-posgrado.component';
import { EditAspirantPosgradoComponent } from './edit-aspirant-posgrado/edit-aspirant-posgrado.component';


@NgModule({
  declarations: [
    PosgradoComponent,
    ShowPosgradoComponent,
    SelectMaestriaDoctoradoComponent,
    ViewAspirantPosgradoComponent,
    EditAspirantPosgradoComponent
  ],
  imports: [
    CommonModule,
    PosgradoRoutingModule,
    SharedModule
  ]
})
export class PosgradoModule { }
