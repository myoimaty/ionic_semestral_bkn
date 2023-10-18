import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //declarations
  formularioLogin: FormGroup;

  //decaration clase
  loginForm: FormGroup;
  user: any; //toda la info aqui 
  emailValue?: string //capturar email usuario random
  passValue?: string //capturar contraseña de usuario random

  constructor(
    private router: Router,
    private alertController: AlertController,
    public fb: FormBuilder,
    private usuariosRandom: UsuariosrandomService,
  ) {
    //clase
    this.loginForm =  this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    this.formularioLogin = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.usuariosRandom.getRandomUser().subscribe(
      (data) =>{
        this.user = data.results[0] //rellena el user
        this.emailValue = this.user.email
        this.passValue = this.user.login.password
      },

    )
  }

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
