import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-agregarclas',
  templateUrl: './agregarclas.page.html',
  styleUrls: ['./agregarclas.page.scss'],
})
export class AgregarclasPage implements OnInit {

  constructor(
    private ClasesService: ClasesService,
    private router: Router,
    private ToastController: ToastController,
  ) { }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string){
    const toast = await this.ToastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  addClase(nombre:any,nomProf:any){
    this.ClasesService.addClase(nombre.value,nomProf.value);
    this.mensajeToast("jugador agregado")
    this.router.navigate(['/homedocente']);

  }

}
