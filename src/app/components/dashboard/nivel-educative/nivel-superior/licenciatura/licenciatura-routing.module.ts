import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenciaturaComponent } from './licenciatura.component';
import { AspirantLicenciatureComponent } from './aspirant-licenciature/aspirant-licenciature.component';
import { ViewAspirantLicenciatureComponent } from './view-aspirant-licenciature/view-aspirant-licenciature.component';

const routes: Routes = [
  {path: '', component: LicenciaturaComponent, children:[
    {path: '', component: AspirantLicenciatureComponent},
    {path: 'View_aspirant', component: ViewAspirantLicenciatureComponent},
    {path: '**', redirectTo:'' , pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenciaturaRoutingModule { }
