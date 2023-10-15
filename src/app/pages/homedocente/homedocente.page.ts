import { Component, OnInit } from '@angular/core';
import { Clases } from '../home/home.model';
import { ClasesService } from 'src/app/services/clases.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homedocente',
  templateUrl: './homedocente.page.html',
  styleUrls: ['./homedocente.page.scss'],
})
export class HomedocentePage implements OnInit {

  listarCLases: Clases[] = [];
  clases! : Clases;
  

  constructor(private ClasesService: ClasesService, private toastController: ToastController, private router: Router, private alertCotroller: AlertController) { }

  ngOnInit() {
    this.listarCLases = this.ClasesService.getAll()
  }
  ionViewWillEnter() {
    this.listarCLases = this.ClasesService.getAll()
  }

  addClase(){
    this.router.navigate(['/agregarclas']);
  }



  asistencia() {
    this.router.navigate(['asistencias'])
  }
}
