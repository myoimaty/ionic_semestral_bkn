import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApipagePage } from './apipage.page';

const routes: Routes = [
  {
    path: '',
    component: ApipagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApipagePageRoutingModule {}
