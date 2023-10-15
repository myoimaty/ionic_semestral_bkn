import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarclasPageRoutingModule } from './agregarclas-routing.module';

import { AgregarclasPage } from './agregarclas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarclasPageRoutingModule
  ],
  declarations: [AgregarclasPage]
})
export class AgregarclasPageModule {}
