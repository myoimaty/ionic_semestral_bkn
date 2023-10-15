import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsisDocentePageRoutingModule } from './asis-docente-routing.module';

import { AsisDocentePage } from './asis-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsisDocentePageRoutingModule
  ],
  declarations: [AsisDocentePage]
})
export class AsisDocentePageModule {}
