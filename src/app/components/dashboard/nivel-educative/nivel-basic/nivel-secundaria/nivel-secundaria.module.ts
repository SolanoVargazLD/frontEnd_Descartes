import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelSecundariaRoutingModule } from './nivel-secundaria-routing.module';
import { NivelSecundariaComponent } from './nivel-secundaria.component';
import { ViewSecundariaComponent } from './view-secundaria/view-secundaria.component';
import { SharedModule } from 'src/app/components/shared/shared.module';


@NgModule({
  declarations: [
    NivelSecundariaComponent,
    ViewSecundariaComponent
  ],
  imports: [
    CommonModule,
    NivelSecundariaRoutingModule,
    SharedModule
  ]
})
export class NivelSecundariaModule { }
