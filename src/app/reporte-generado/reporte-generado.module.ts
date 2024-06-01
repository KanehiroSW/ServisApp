import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteGeneradoPageRoutingModule } from './reporte-generado-routing.module';

import { ReporteGeneradoPage } from './reporte-generado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteGeneradoPageRoutingModule
  ],
  declarations: [ReporteGeneradoPage]
})
export class ReporteGeneradoPageModule {}
