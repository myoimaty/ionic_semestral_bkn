import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;

  constructor(
    private router: Router,
    private alertController: AlertController,
    public fb: FormBuilder,
  ) {
    this.formularioLogin = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  async ingresar() {
    const { nombre, password } = this.formularioLogin.value;

    const storedUser = JSON.parse(localStorage.getItem('usuario') || '{}');

    if (storedUser.nombre === nombre && storedUser.password === password) {
      console.log('Ingresado');
      this.router.navigate(['home']);
    } else {
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos que ingresaste son incorrectos',
        buttons: ['Aceptar'],
      });

      await alert.present();
    }
  }

  registrar() {
    this.router.navigate(['crear-usuario']);
  }

  restaurar() {
    this.router.navigate(['rest-contrasena']);
  }

  docentes() {
    this.router.navigate(['login-docentes']);
  }
}
