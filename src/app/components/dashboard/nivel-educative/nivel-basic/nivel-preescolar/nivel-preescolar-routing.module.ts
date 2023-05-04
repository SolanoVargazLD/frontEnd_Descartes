import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelPreescolarComponent } from './nivel-preescolar.component';
import { ViewPreescolarComponent } from './view-preescolar/view-preescolar.component';
import { ModifyAspirantComponent } from '../modify-aspirant/modify-aspirant.component';
import { ViewAspirantComponent } from '../view-aspirant/view-aspirant.component';

const routes: Routes = [
  {path: '', component: NivelPreescolarComponent, children:[
    {path: '', component: ViewPreescolarComponent},
    {path: 'View_aspirant', component: ViewAspirantComponent},
    {path: 'Modify_aspirant', component: ModifyAspirantComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelPreescolarRoutingModule { }
