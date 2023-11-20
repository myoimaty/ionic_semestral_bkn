import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ToastController } from '@ionic/angular'; // Importa ToastController
import Swal from 'sweetalert2';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  langs: string[] = [];
  idioma!: string;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
    private toastController: ToastController, // Inyecta ToastController
    private authService: AuthfirebaseService,
    private transService: TranslateService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });

    this.langs = this.transService.getLangs();
  }

  ngOnInit() {
    this.authService.checkAuth()
    .then((user) => {
      if(user) {
        this.router.navigate(['home']);
      }
    })
    .catch((error) => {
      console.error('Error en auenticacion:', error);
    })
  }

  ingresar() {
    /*
    
    console.log('Usuario que intenta iniciar sesión:', { email, password });
    const isAuthenticated = await this.loginService.authenticate({ email, password });
    
    if (isAuthenticated) {
      console.log('Usuario autenticado');
      this.router.navigate(['home']);
      this.pasaste();
    } else {
      console.log('Credenciales inválidas');
      this.mostrarError(); // Llama a la función para mostrar el mensaje de error
    }*/

    const { email, password } = this.loginForm.value;
    this.authService.login(email, password);
    if (this.authService) {
      console.log('Usuario autenticado');
      //this.router.navigate(['home']);
      //this.pasaste();
    } else {
      console.log('Credenciales inválidas');
      this.mostrarError(); // Llama a la función para mostrar el mensaje de error
    }
  }

  async mostrarError() {
    await Swal.fire({
      icon: 'error', // Tipo de ícono (puedes cambiarlo según tus necesidades)
      title: 'Credenciales inválidas',
      text: 'Por favor, verifica tu correo electrónico y contraseña.',
      confirmButtonText: 'Entendido', // Texto del botón de confirmación
      heightAuto: false
    });
  }
  async pasaste() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Logueado'
    })
  }

  registrar() {
    //this.router.navigate(['crear-usuario']);
    const { email, password } = this.loginForm.value;
    this.authService.register(email, password);
    if (this.authService) {
      console.log('Usuario registrado');
      //this.router.navigate(['home']);
      this.pasaste();
    } else {
      console.log('Credenciales inválidas');
      this.mostrarError(); // Llama a la función para mostrar el mensaje de error
    }
  }

  restaurar() {
    this.router.navigate(['rest-contrasena']);
  }

  docentes() {
    this.router.navigate(['login-docentes']);
  }

  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }
}