import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteGeneradoPage } from './reporte-generado.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteGeneradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteGeneradoPageRoutingModule {}
