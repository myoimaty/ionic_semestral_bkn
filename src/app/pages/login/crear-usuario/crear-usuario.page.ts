import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {
  formularioRegistro: FormGroup;

  

  constructor(
    private router: Router,
    private alertController: AlertController,
    public fb: FormBuilder,
    private authService: AuthService // Inyecta AuthService aquí
  ) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  home() {
    this.router.navigate(['home']);
  }


  async guardar() {
    const { nombre, password} = this.formularioRegistro.value;
  
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
      return;
    }
  
    // Guarda el usuario en localStorage
    localStorage.setItem('usuario', JSON.stringify({ nombre, password}));
    this.router.navigate(['home']);
  }
}