import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PerfilInicioDashboardComponent } from './perfil-inicio-dashboard/perfil-inicio-dashboard.component';
import { BasicPreescolarComponent } from './basic/nivel-basic/basic-preescolar.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path: '', redirectTo:'PerfilInicio', pathMatch:'full'},
    {path:'PerfilInicio' ,component: PerfilInicioDashboardComponent},
    // {path:'Preescolar',loadChildren: ()=> import('./basic/nivel-basic/nivel-basic.module').then(x=> x.NivelBasicModule)},
    {path:'Preescolar',loadChildren: ()=> import('./basic/nivel-basic/nivel-basic.module').then(x=> x.NivelBasicModule)},//component: NivelBasicComponent},
    {path: '**', redirectTo:'PerfilInicio', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
