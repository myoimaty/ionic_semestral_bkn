import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Clases } from './home.model';
import { ClasesService } from 'src/app/services/api/clases.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listarCLases: any = [];
  langs: string[] = [];
  idioma!: string;

  constructor(private router: Router,
    //private clasesApi: ClasesService,
    private firestore: FirestoreService,
    private auth: AuthfirebaseService,
    private transService: TranslateService
    ) {
      this.langs = this.transService.getLangs();
     }

  ngOnInit() {
    /*
    this.clasesApi.listClases().subscribe((resp) => {
      //console.log(resp)
      this.listarCLases = resp
    })*/
  }

  ionViewWillEnter(){
     this.listar();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }

  listar(){
    /*this.clasesApi.listClases().subscribe((resp) => {
      //console.log(resp)
      this.listarCLases = resp
    })
    //this.listarCLases = this.ClasesService.getAll()*/
    this.firestore.getCollection('Clases').subscribe((clase) => {
      this.listarCLases = clase
    })
  }

  asistencia() {
    this.router.navigate(['asistencias'])
  }
}
