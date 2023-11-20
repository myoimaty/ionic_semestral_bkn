import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { DocenteLoginService } from 'src/app/services/docente-login.service';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-docentes',
  templateUrl: './login-docentes.page.html',
  styleUrls: ['./login-docentes.page.scss'],
})
export class LoginDocentesPage {
  langs: string[] = [];
  idioma!: string;
  email: string = '';
  password: string = '';

  constructor(private router: Router,
    private docenteLoginService: DocenteLoginService,
    private toastController: ToastController,
    private authService: AuthfirebaseService,
    private transService: TranslateService
    ) {
      this.langs = this.transService.getLangs();
    }

  ingresar() {/*
    if (this.email && this.password) {
      this.docenteLoginService.authenticate({ email: this.email, password: this.password }).then(isAuthenticated => {
        if (isAuthenticated) {
          // Usuario autenticado, redirige a la página deseada
          this.router.navigate(['apilist']);
          this.pasaste()
        } else {
          // Credenciales inválidas, muestra un mensaje de error si es necesario
          console.log('Credenciales inválidas');
          this.tuno()
          // Puedes mostrar un mensaje de error al usuario aquí si lo deseas
        }
      });
    } else {
      // Informa al usuario que debe ingresar ambos campos
      console.log('Por favor, ingrese correo y contraseña.');
      this.nada()
      // Puedes mostrar un mensaje al usuario aquí si lo deseas
    }*/

    if(this.email && this.password) {
      this.authService.loginDocente(this.email, this.password);
      this.router.navigate(['apilist']);
      this.pasaste()
    } else {
      // Informa al usuario que debe ingresar ambos campos
      console.log('Por favor, ingrese correo y contraseña.');
      this.nada()
      // Puedes mostrar un mensaje al usuario aquí si lo deseas
    }
  }

  async nada() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'Por favor, ingrese correo y contraseña.'
    })
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
      title: 'Logeado'
    })
  }
  async tuno() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'error',
      title: 'tu no eres profe 👿'
    })
  }
  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }
}


  
