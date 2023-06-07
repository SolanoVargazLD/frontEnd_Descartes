import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativeComponent } from './administrative.component';
import { ViewAdministrativeComponent } from './view-administrative/view-administrative.component';
import { AddAdministrativeComponent } from './add-administrative/add-administrative.component';

const routes: Routes = [
  {path: '', component:AdministrativeComponent, children:[
    {path: '', component: ViewAdministrativeComponent},
    {path: 'View_Administrative', component: ViewAdministrativeComponent},
    {path: 'Add_Administrative', component: AddAdministrativeComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrativeRoutingModule { }
