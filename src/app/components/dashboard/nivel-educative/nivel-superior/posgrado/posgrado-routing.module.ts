import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosgradoComponent } from './posgrado.component';
import { ShowPosgradoComponent } from './show-posgrado/show-posgrado.component';

const routes: Routes = [
  {path: '', component: PosgradoComponent, children:[
    {path: '', component: ShowPosgradoComponent},
    {path: '**', redirectTo:'', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosgradoRoutingModule { }
