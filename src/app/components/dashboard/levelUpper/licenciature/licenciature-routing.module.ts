import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenciaturaComponent } from '../../nivel-educative/nivel-superior/licenciatura/licenciatura.component';
import { ViewLicenciatureComponent } from './view-licenciature/view-licenciature.component';
import { AddLicenciatureComponent } from './add-licenciature/add-licenciature.component';

const routes: Routes = [
  {path: '', component: LicenciaturaComponent, children: [
    {path: '', component:ViewLicenciatureComponent},
    {path: 'View_Carreras', component: ViewLicenciatureComponent},
    {path: 'Add_Carreras', component: AddLicenciatureComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicenciatureRoutingModule { }
