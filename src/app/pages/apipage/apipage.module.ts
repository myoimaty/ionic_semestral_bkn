import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApipagePageRoutingModule } from './apipage-routing.module';

import { ApipagePage } from './apipage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApipagePageRoutingModule
  ],
  declarations: [ApipagePage]
})
export class ApipagePageModule {}
