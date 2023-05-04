import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelSecundariaComponent } from './nivel-secundaria.component';
import { ViewSecundariaComponent } from './view-secundaria/view-secundaria.component';
import { ViewAspirantComponent } from '../view-aspirant/view-aspirant.component';
// import { ModifyAspirantComponent } from '../modify-aspirant/modify-aspirant.component';

const routes: Routes = [
  {path: '', component: NivelSecundariaComponent , children:[
    {path: '', component: ViewSecundariaComponent},
    {path: 'View_aspirant', component: ViewAspirantComponent},
    // {path: 'Modify_aspirant', component: ModifyAspirantComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelSecundariaRoutingModule { }
