import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PerfilInicioDashboardComponent } from './perfil-inicio-dashboard/perfil-inicio-dashboard.component';

const routes: Routes = [
  {path:'', component: DashboardComponent, children:[
    {path: '', redirectTo:'PerfilInicio', pathMatch:'full'},
    {path:'PerfilInicio' ,component: PerfilInicioDashboardComponent},
    {path:'NivelPreescolar',loadChildren: ()=> import('./nivel-educative/nivel-basic/nivel-preescolar/nivel-preescolar.module').then(x=> x.NivelPreescolarModule)},
    {path:'NivelPrimaria',loadChildren: ()=> import('./nivel-educative/nivel-basic/nivel-primaria/nivel-primaria.module').then(x=> x.NivelPrimariaModule)},
    {path:'NivelSecundaria',loadChildren: ()=> import('./nivel-educative/nivel-basic/nivel-secundaria/nivel-secundaria.module').then(x=> x.NivelSecundariaModule)},
    {path:'NivelBachillerate',loadChildren: ()=> import('./nivel-educative/nivel-media/nivel-media.module').then(x=> x.NivelMediaModule)},
    {path: '**', redirectTo:'PerfilInicio', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
