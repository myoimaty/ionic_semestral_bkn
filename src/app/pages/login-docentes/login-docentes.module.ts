import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDocentesPageRoutingModule } from './login-docentes-routing.module';

import { LoginDocentesPage } from './login-docentes.page';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginDocentesPageRoutingModule
  ],
  declarations: [LoginDocentesPage, CardComponent]
})
export class LoginDocentesPageModule {}
