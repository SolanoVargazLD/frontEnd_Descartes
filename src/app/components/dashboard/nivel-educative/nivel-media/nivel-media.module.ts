import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelMediaRoutingModule } from './nivel-media-routing.module';
import { NivelMediaComponent } from './nivel-media.component';
import { ViewBachilleratoComponent } from './view-bachillerato/view-bachillerato.component';
import { EditBachillerateComponent } from './edit-bachillerate/edit-bachillerate.component';
import { ViewAspirantBachillerateComponent } from './view-aspirant-bachillerate/view-aspirant-bachillerate.component';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    NivelMediaComponent,
    ViewBachilleratoComponent,
    EditBachillerateComponent,
    ViewAspirantBachillerateComponent
  ],
  imports: [
    CommonModule,
    NivelMediaRoutingModule,
    SharedModule
  ]
})
export class NivelMediaModule { }
