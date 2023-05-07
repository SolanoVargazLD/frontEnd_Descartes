import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelMediaComponent } from './nivel-media.component';
import { ViewAspirantBachillerateComponent } from './view-aspirant-bachillerate/view-aspirant-bachillerate.component';
import { ViewBachilleratoComponent } from './view-bachillerato/view-bachillerato.component';
import { EditBachillerateComponent } from './edit-bachillerate/edit-bachillerate.component';

const routes: Routes = [
  {path: '', component:NivelMediaComponent, children:[
    {path: '', component:ViewBachilleratoComponent},
    {path: 'View_aspirant', component: ViewAspirantBachillerateComponent},
    {path: 'Edit_aspirant', component: EditBachillerateComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelMediaRoutingModule { }
