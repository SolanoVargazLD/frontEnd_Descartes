import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosgradoComponent } from './posgrado.component';
import { ShowPosgradoComponent } from './show-posgrado/show-posgrado.component';
import { ViewAspirantPosgradoComponent } from './view-aspirant-posgrado/view-aspirant-posgrado.component';
import { EditAspirantPosgradoComponent } from './edit-aspirant-posgrado/edit-aspirant-posgrado.component';

const routes: Routes = [
  {path: '', component: PosgradoComponent, children:[
    {path: '', component: ShowPosgradoComponent},
    {path: 'View_aspirant', component: ViewAspirantPosgradoComponent},
    {path: 'Edit_aspirant', component: EditAspirantPosgradoComponent},
    {path: '**', redirectTo:'', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosgradoRoutingModule { }
