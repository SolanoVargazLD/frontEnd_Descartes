import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'}, //TODO Redireccionar a login
  {path: 'login', component: LoginComponent},//TODO direccion a login
  {path:'dashboard',loadChildren: ()=> import('./components/dashboard/dashboard.module').then(x=> x.DashboardModule)},
  {path: '**', redirectTo: 'login', pathMatch:'full'}, //TODO Redireccionar a login, normalmente es el error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
