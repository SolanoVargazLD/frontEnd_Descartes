import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BasicPreescolarComponent } from './basic/basic-preescolar/basic-preescolar.component';
import { PerfilInicioDashboardComponent } from './perfil-inicio-dashboard/perfil-inicio-dashboard.component';
import { ViewAspirantComponent } from './view-aspirant/view-aspirant-Basic/view-aspirant.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path: '', redirectTo:'PerfilInicio', pathMatch:'full'},
    {path:'PerfilInicio' ,component: PerfilInicioDashboardComponent},
    {path: 'Preescolar', component: BasicPreescolarComponent},
    {path: 'View_Aspirant', component: ViewAspirantComponent},
    {path: '**', redirectTo:'PerfilInicio', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
