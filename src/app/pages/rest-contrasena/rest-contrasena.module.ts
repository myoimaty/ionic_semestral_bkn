import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestContrasenaPageRoutingModule } from './rest-contrasena-routing.module';

import { RestContrasenaPage } from './rest-contrasena.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestContrasenaPageRoutingModule,
    TranslateModule
  ],
  declarations: [RestContrasenaPage]
})
export class RestContrasenaPageModule {}
