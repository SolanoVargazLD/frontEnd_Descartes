import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowLicenciaturesComponent } from './show-licenciatures/show-licenciatures.component';
import { LicenciaturaComponent } from './licenciatura.component';
import { ViewAspirantLicenciatureComponent } from './view-aspirant-licenciature/view-aspirant-licenciature.component';
import { EditAspirantLicenciatureComponent } from './edit-aspirant-licenciature/edit-aspirant-licenciature.component';

const routes: Routes = [
  {path: '', component: LicenciaturaComponent, children:[
    {path: '', component: ShowLicenciaturesComponent},
    {path: 'View_aspirant', component: ViewAspirantLicenciatureComponent},
    {path: 'Edit_aspirant', component: EditAspirantLicenciatureComponent},
    {path: '**', redirectTo:'' , pathMatch: 'full' }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenciaturaRoutingModule { }
