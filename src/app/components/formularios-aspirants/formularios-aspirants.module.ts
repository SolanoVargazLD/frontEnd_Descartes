import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulariosASpirantsRoutingModule } from './formularios-aspirants-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormularioBasicComponent } from './formulario-basic/formulario-basic.component';
import { FormularioBachillerComponent } from './formulario-bachiller/formulario-bachiller.component';
import { FormulariosLicenciatureComponent } from './formularios-licenciature/formularios-licenciature.component';
import { FormulariosPosgradoComponent } from './formularios-posgrado/formularios-posgrado.component';


@NgModule({
  declarations: [
    FormularioBasicComponent,
    FormularioBachillerComponent,
    FormulariosLicenciatureComponent,
    FormulariosPosgradoComponent,
  ],
  imports: [
    CommonModule,
    FormulariosASpirantsRoutingModule,
    SharedModule
  ]
})
export class FormulariosASpirantsModule { }
