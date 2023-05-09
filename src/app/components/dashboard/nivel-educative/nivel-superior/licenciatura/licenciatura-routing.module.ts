import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAspirantLicenciatureComponent } from './view-aspirant-licenciature/view-aspirant-licenciature.component';
import { ShowLicenciaturesComponent } from './show-licenciatures/show-licenciatures.component';

const routes: Routes = [
  {path: '', component: ShowLicenciaturesComponent, children:[
    {path: '', component: ShowLicenciaturesComponent},
    //{path: 'View_aspirant', component: ViewAspirantLicenciatureComponent},
    {path: '**', redirectTo:'' , pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenciaturaRoutingModule { }
