import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomedocentePageRoutingModule } from './homedocente-routing.module';

import { HomedocentePage } from './homedocente.page';
import { ClasesComponent } from 'src/app/components/clases/clases.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomedocentePageRoutingModule
  ],
  declarations: [HomedocentePage, ClasesComponent]
})
export class HomedocentePageModule {}
