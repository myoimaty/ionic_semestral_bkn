import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenQRPage } from './gen-qr.page';

const routes: Routes = [
  {
    path: '',
    component: GenQRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenQRPageRoutingModule {}
