import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BasicPreescolarComponent } from './basic/nivel-basic/basic-preescolar.component';
import { PerfilInicioDashboardComponent } from './perfil-inicio-dashboard/perfil-inicio-dashboard.component';
import { FormatAdministratorPipe } from 'src/app/pipes/pipeDashboard/format-administrator.pipe';
import { ModifyAspirantBasicComponent } from './basic/nivel-basic/modify-aspirant-basic/modify-aspirant-basic.component';
import { ViewAspirantComponent } from './basic/nivel-basic/view-aspirant-Basic/view-aspirant.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BasicPreescolarComponent,
    PerfilInicioDashboardComponent,
    FormatAdministratorPipe,
    ViewAspirantComponent,
    ModifyAspirantBasicComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ]
})
export class DashboardModule { }
