import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ClasesService } from 'src/app/services/api/clases.service';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  langs: string[] = [];
  idioma!: string;
  
  listarCLases: any = [];

  constructor(
    private router: Router,
    //private clasesApi: ClasesService
    private firestore:  FirestoreService,
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
    })
    */
    this.listar();
  }

  addClase(){
    this.router.navigate(['/apiadd']);
  }

  ionViewWillEnter(){
     this.listar();
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['login']);
  }

  listar(){/*
    this.clasesApi.listClases().subscribe((resp) => {
      //console.log(resp)
      this.listarCLases = resp
    })
    //this.listarCLases = this.ClasesService.getAll()
  }*/
  this.firestore.getCollection('Clases').subscribe((clase) => {
    this.listarCLases = clase
  })
  }
  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }
}
