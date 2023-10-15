import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarclasPage } from './agregarclas.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarclasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarclasPageRoutingModule {}
