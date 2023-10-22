import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteLoginService } from 'src/app/services/docente-login.service';

@Component({
  selector: 'app-login-docentes',
  templateUrl: './login-docentes.page.html',
  styleUrls: ['./login-docentes.page.scss'],
})
export class LoginDocentesPage {
  email: string = '';
  password: string = '';

  constructor(private router: Router, private docenteLoginService: DocenteLoginService) {}

  ingresar() {
    if (this.email && this.password) {
      this.docenteLoginService.authenticate({ email: this.email, password: this.password }).then(isAuthenticated => {
        if (isAuthenticated) {
          // Usuario autenticado, redirige a la página deseada
          this.router.navigate(['apilist']);
        } else {
          // Credenciales inválidas, muestra un mensaje de error si es necesario
          console.log('Credenciales inválidas');
          // Puedes mostrar un mensaje de error al usuario aquí si lo deseas
        }
      });
    } else {
      // Informa al usuario que debe ingresar ambos campos
      console.log('Por favor, ingrese correo y contraseña.');
      // Puedes mostrar un mensaje al usuario aquí si lo deseas
    }
  }
}
