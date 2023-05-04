import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelPreescolarComponent } from './nivel-preescolar.component';
import { ViewPreescolarComponent } from './view-preescolar/view-preescolar.component';
import { ViewAspirantComponent } from '../view-aspirant/view-aspirant.component';
import { EditAspirantComponent } from '../edit-aspirant/edit-aspirant.component';

const routes: Routes = [
  {path: '', component: NivelPreescolarComponent, children:[
    {path: '', component: ViewPreescolarComponent},
    {path: 'View_aspirant', component: ViewAspirantComponent},
    {path: 'Edit_aspirant', component: EditAspirantComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelPreescolarRoutingModule { }
