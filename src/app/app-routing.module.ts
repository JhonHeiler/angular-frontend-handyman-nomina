import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HourWorkedComponent } from './pages/hour-worked/hour-worked.component';
import { ServiceReportComponent } from './pages/service-report/service-report.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: "reporte-de-servicio"
  },
  {
    path: 'reporte-de-servicio',
    component: ServiceReportComponent,
  },
  {
    path: 'horas-trabajadas',
    component: HourWorkedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
