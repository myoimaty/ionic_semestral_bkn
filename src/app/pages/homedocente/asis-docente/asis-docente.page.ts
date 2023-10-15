import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Clases } from '../../home/home.model';
import { ClasesService } from 'src/app/services/clases.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-asis-docente',
  templateUrl: './asis-docente.page.html',
  styleUrls: ['./asis-docente.page.scss'],
})
export class AsisDocentePage implements OnInit {

  clases! : Clases;

  constructor(private router: Router  ,private alertCotroller: AlertController  ,private ClasesService: ClasesService, private activatedRoute: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.clases = this.ClasesService.getClase(aux) 
      }
    })
  }
  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom'
    });
    toast.present()
  }

  async deleteClase(){
    //this.mensajeToast("Clase eliminada");
    const alerta = await this.alertCotroller.create({
      header: 'Eliminar la clase',
      message: 'Estas seguro de borrar esta clase?',
      buttons:[
        {
          text: 'Eliminar',
          handler: () => {
            if (this.clases && this.clases.id !== undefined){
              this.ClasesService.deleteClase(this.clases.id);
              this.router.navigate(['/homedocente']);
              this.mensajeToast("clase Eliminada");
              console
            }else{

            }

          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            this.mensajeToast("Accion cancelada");
          }
        },
      ]
    });
    await alerta.present();
    let resultado = await alerta.onDidDismiss();

  }

}
