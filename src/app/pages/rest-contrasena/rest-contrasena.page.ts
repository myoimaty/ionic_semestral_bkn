import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rest-contrasena',
  templateUrl: './rest-contrasena.page.html',
  styleUrls: ['./rest-contrasena.page.scss'],
})
export class RestContrasenaPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  mensaje(usuario: any) {
    const usuarioValue = usuario.value; // Obtener el valor del campo de correo electrónico
    if (!usuarioValue) {
      // Mostrar un mensaje de error si el campo está vacío
      this.mostrarError("Por favor, ingrese su correo antes de enviar.");
    } else {
      // Mostrar el mensaje de éxito si el campo tiene un valor
      this.mostrarBien("Correo enviado.");
    }
  }

  async mostrarError(mensaje: string) {
    await Swal.fire({
      icon: 'error', // Tipo de ícono (puedes cambiarlo según tus necesidades)
      text: mensaje,
      confirmButtonText: 'Entendido', // Texto del botón de confirmación
      heightAuto: false
    });
  }
  async mostrarBien(mensaje: string) {
    await Swal.fire({
      icon: 'success', // Tipo de ícono (puedes cambiarlo según tus necesidades)
      text: mensaje,
      confirmButtonText: 'Entendido', // Texto del botón de confirmación
      heightAuto: false
    });
  }

}
