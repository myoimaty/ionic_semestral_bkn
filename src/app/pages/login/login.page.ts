import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastController } from '@ionic/angular'; // Importa ToastController

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastController: ToastController // Inyecta ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  async ingresar() {
    const { email, password } = this.loginForm.value;
    console.log('Usuario que intenta iniciar sesión:', { email, password });
    const isAuthenticated = await this.loginService.authenticate({ email, password });

    if (isAuthenticated) {
      console.log('Usuario autenticado');
      this.router.navigate(['home']);
    } else {
      console.log('Credenciales inválidas');
      this.mostrarError(); // Llama a la función para mostrar el mensaje de error
    }
  }

  async mostrarError() {
    const toast = await this.toastController.create({
      message: 'Credenciales inválidas. Por favor, verifica tu correo electrónico y contraseña.',
      duration: 3000, // Duración del mensaje en milisegundos (3 segundos en este caso)
      position: 'bottom', // Posición del mensaje en la pantalla (puedes cambiarlo según tus preferencias)
    });
    await toast.present(); // Muestra el mensaje de error
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