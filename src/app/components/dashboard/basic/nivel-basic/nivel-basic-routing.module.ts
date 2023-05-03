import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicPreescolarComponent } from './basic-preescolar.component';
import { ViewDataAspirantBasicComponent } from './view-data-aspirant-basic/view-data-aspirant-basic.component';
import { ModifyDataAspirantBasicComponent } from './modify-data-aspirant-basic/modify-data-aspirant-basic.component';

const routes: Routes = [
  {path:'', component: BasicPreescolarComponent},
  {path:'ViewAspirant', component: ViewDataAspirantBasicComponent},
  {path:'ModifyAspirant', component: ModifyDataAspirantBasicComponent},
  {path: '**', redirectTo:'', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelBasicRoutingModule { }
