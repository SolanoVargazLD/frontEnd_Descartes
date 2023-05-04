import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from '././dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard.component';
import { PerfilInicioDashboardComponent } from './perfil-inicio-dashboard/perfil-inicio-dashboard.component';
import { FormatAdministratorPipe } from 'src/app/pipes/pipeDashboard/format-administrator.pipe';
import { ViewAspirantComponent } from './nivel-educative/nivel-basic/view-aspirant/view-aspirant.component';
import { EditAspirantComponent } from './nivel-educative/nivel-basic/edit-aspirant/edit-aspirant.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PerfilInicioDashboardComponent,
    FormatAdministratorPipe,
    ViewAspirantComponent,
    EditAspirantComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    LayoutModule,
  ]
})
export class DashboardModule { }
