import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BasicPreescolarComponent } from './basic/nivel-basic/basic-preescolar.component';
import { PerfilInicioDashboardComponent } from './perfil-inicio-dashboard/perfil-inicio-dashboard.component';
import { ViewAspirantComponent } from './basic/nivel-basic/view-aspirant-Basic/view-aspirant.component';
import { ModifyAspirantBasicComponent } from './basic/nivel-basic/modify-aspirant-basic/modify-aspirant-basic.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path: '', redirectTo:'PerfilInicio', pathMatch:'full'},
    {path:'PerfilInicio' ,component: PerfilInicioDashboardComponent},
    {path: 'Preescolar', component: BasicPreescolarComponent},
    {path: 'View_Aspirant', component: ViewAspirantComponent},
    {path: 'ModifyAspirant', component: ModifyAspirantBasicComponent},
    {path: '**', redirectTo:'PerfilInicio', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
