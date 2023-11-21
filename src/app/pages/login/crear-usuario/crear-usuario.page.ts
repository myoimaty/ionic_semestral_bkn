import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iusuario } from 'src/app/interfaces/iusuario';
import { UsuariosService } from 'src/app/services/api/usuarios.service';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {
  usuario: Iusuario = {
    email: '',
    password: '',
  };

  loginForm: FormGroup;
  emailValue?: string;
  passValue?: string;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private usuariosRandom: UsuariosrandomService,
    private apiServices: UsuariosService,
    private authService: AuthfirebaseService
  ) {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  agregarUsuariosAleatorios() {
    this.usuariosRandom.getRandomUsers().subscribe(
      (data) => {
        const users = data; // Obtén los usuarios aleatorios
        for (const userObj of users) {
          const user = userObj.results[0]; // Accede al primer usuario del array 'results'
          const nuevoUsuario: Iusuario = {
            email: user.email,
            password: user.login.password,
          };
          this.apiServices.addUser(nuevoUsuario).subscribe();
        }
      },
      (error) => {
        console.error('Error al obtener usuarios aleatorios:', error);
      }
    );
  }

  home() {
    this.router.navigate(['home']);
  }

  addUser() {
    /*
    this.apiServices.addUser(this.usuario).subscribe(() => {
      this.exito()
      this.router.navigate(['/home']);
    });
    */
   if (this.usuario.email && this.usuario.password) {
    this.authService.register(this.usuario.email, this.usuario.password);
    this.exito();
    this.router.navigate(['/home']);
   }
  }

  async exito() {
    await Swal.fire({
      icon: 'success', // Tipo de ícono (puedes cambiarlo según tus necesidades)
      title: 'Cuenta creada',
      confirmButtonText: 'Entendido', // Texto del botón de confirmación
      heightAuto: false
    });
  }
}