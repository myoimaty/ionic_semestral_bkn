import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenQRPageRoutingModule } from './gen-qr-routing.module';

import { GenQRPage } from './gen-qr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenQRPageRoutingModule
  ],
  declarations: [GenQRPage]
})
export class GenQRPageModule {}
