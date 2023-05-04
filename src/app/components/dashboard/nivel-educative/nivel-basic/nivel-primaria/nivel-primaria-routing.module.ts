import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NivelPrimariaComponent } from './nivel-primaria.component';
import { ViewPrimariaComponent } from './view-primaria/view-primaria.component';
import { ViewAspirantComponent } from '../view-aspirant/view-aspirant.component';
// import { ModifyAspirantComponent } from '../modify-aspirant/modify-aspirant.component';

const routes: Routes = [
  {path: '', component: NivelPrimariaComponent , children:[
    {path: '', component: ViewPrimariaComponent},
    {path: 'View_aspirant', component: ViewAspirantComponent},
    // {path: 'Modify_aspirant', component: ModifyAspirantComponent},
    {path: '**', redirectTo:'', pathMatch:'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NivelPrimariaRoutingModule { }
