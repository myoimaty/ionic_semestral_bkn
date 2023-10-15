import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsisDocentePage } from './asis-docente.page';

const routes: Routes = [
  {
    path: '',
    component: AsisDocentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsisDocentePageRoutingModule {}
