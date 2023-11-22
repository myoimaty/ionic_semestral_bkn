import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthfirebaseService } from '../../services/firebase/authfirebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rest-contrasena',
  templateUrl: './rest-contrasena.page.html',
  styleUrls: ['./rest-contrasena.page.scss'],
})
export class RestContrasenaPage implements OnInit {

  public email: string = '';
  public alertButtons = ['OK'];

  constructor(private router: Router, private alertController: AlertController, private authService: AuthfirebaseService) { }

  ngOnInit() {
  }

  async recuperarContrasena() {
    if (this.email) {
      try {
        await this.authService.recuperar(this.email);

        this.mensaje();
      } catch (error) {
        this.mensajeError();
      }
    } else {
      this.invalido();
    }
  }

  mensaje() {
    Swal.fire({
      icon: 'success',
      title: 'Registrado',
      text: 'Se ha enviado correo de recuperación correctamente a: ' + this.email,
      heightAuto: false
    });
  }


  mensajeError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Error al enviar el correo de recuperación de contraseña',
      heightAuto: false
    });
  }



  invalido() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Ingrese una dirección de correo electrónico válida.',
      heightAuto: false
    });
  }
}
