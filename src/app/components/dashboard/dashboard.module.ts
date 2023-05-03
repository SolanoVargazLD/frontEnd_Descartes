import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BasicPreescolarComponent } from './basic/nivel-basic/basic-preescolar.component';
import { PerfilInicioDashboardComponent } from './perfil-inicio-dashboard/perfil-inicio-dashboard.component';
import { FormatAdministratorPipe } from 'src/app/pipes/pipeDashboard/format-administrator.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    BasicPreescolarComponent,
    PerfilInicioDashboardComponent,
    FormatAdministratorPipe,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    LayoutModule,
  ]
})
export class DashboardModule { }
