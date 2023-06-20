import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosAspirantsComponent } from './formularios-aspirants.component';
import { FormularioBasicComponent } from './formulario-basic/formulario-basic.component';
import { FormularioBachillerComponent } from './formulario-bachiller/formulario-bachiller.component';
import { FormulariosLicenciatureComponent } from './formularios-licenciature/formularios-licenciature.component';
import { FormulariosPosgradoComponent } from './formularios-posgrado/formularios-posgrado.component';

const routes: Routes = [
  {path: '', component: FormulariosAspirantsComponent, children:[
    {path: '', redirectTo:'basic', pathMatch: 'full'},
    {path: 'basic', component: FormularioBasicComponent},
    {path: 'bachiller', component: FormularioBachillerComponent},
    {path: 'licenciature', component: FormulariosLicenciatureComponent},
    {path: 'posgrado', component: FormulariosPosgradoComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulariosASpirantsRoutingModule { }
