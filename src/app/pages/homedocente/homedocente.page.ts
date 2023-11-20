import { Component, OnInit } from '@angular/core';
import { Clases } from '../home/home.model';
import { ClasesService } from 'src/app/services/clases.service';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-homedocente',
  templateUrl: './homedocente.page.html',
  styleUrls: ['./homedocente.page.scss'],
})
export class HomedocentePage implements OnInit {

  langs: string[] = [];
  idioma!: string;

  listarCLases: Clases[] = [];
  clases! : Clases;
  

  constructor(private ClasesService: ClasesService, private toastController: ToastController, private router: Router, private alertCotroller: AlertController,private transService: TranslateService) 
  { 
    this.langs = this.transService.getLangs();
  }

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

  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }
}
