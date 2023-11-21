import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LectorPageRoutingModule } from './lector-routing.module';

import { LectorPage } from './lector.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LectorPageRoutingModule,
    TranslateModule
  ],
  declarations: [LectorPage]
})
export class LectorPageModule {}
