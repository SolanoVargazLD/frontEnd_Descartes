import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelPrimariaRoutingModule } from './nivel-primaria-routing.module';
import { NivelPrimariaComponent } from './nivel-primaria.component';
import { ViewPrimariaComponent } from './view-primaria/view-primaria.component';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  declarations: [
    NivelPrimariaComponent,
    ViewPrimariaComponent
  ],
  imports: [
    CommonModule,
    NivelPrimariaRoutingModule,
    SharedModule
  ]
})
export class NivelPrimariaModule { }
