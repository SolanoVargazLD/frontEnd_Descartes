import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NivelBasicRoutingModule } from './nivel-basic-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ViewDataAspirantBasicComponent } from './view-data-aspirant-basic/view-data-aspirant-basic.component';
import { ModifyDataAspirantBasicComponent } from './modify-data-aspirant-basic/modify-data-aspirant-basic.component';

@NgModule({
  declarations: [
    ViewDataAspirantBasicComponent,
    ModifyDataAspirantBasicComponent
  ],
  imports: [
    CommonModule,
    NivelBasicRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class NivelBasicModule { }
