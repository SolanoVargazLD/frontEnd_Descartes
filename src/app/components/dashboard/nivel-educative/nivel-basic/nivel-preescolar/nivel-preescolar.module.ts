import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelPreescolarRoutingModule } from './nivel-preescolar-routing.module';
import { NivelPreescolarComponent } from './nivel-preescolar.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ViewPreescolarComponent } from './view-preescolar/view-preescolar.component';

@NgModule({
  declarations: [
    NivelPreescolarComponent,
    ViewPreescolarComponent
  ],
  imports: [
    CommonModule,
    NivelPreescolarRoutingModule,
    SharedModule
  ]
})

export class NivelPreescolarModule { }
