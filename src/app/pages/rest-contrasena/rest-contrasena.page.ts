import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-rest-contrasena',
  templateUrl: './rest-contrasena.page.html',
  styleUrls: ['./rest-contrasena.page.scss'],
})
export class RestContrasenaPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position: 'bottom',
    })
    toast.present()
  }

  mensaje(usuario: any) {
    const usuarioValue = usuario.value; // Obtener el valor del campo de correo electrónico
    if (!usuarioValue) {
      // Mostrar un mensaje de error si el campo está vacío
      this.mensajeToast("Por favor, ingrese su correo antes de enviar.");
    } else {
      // Mostrar el mensaje de éxito si el campo tiene un valor
      this.mensajeToast("Correo enviado.");
    }
  }

}
