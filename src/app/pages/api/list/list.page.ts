import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasesService } from 'src/app/services/api/clases.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  listarCLases: any = [];

  constructor(
    private router: Router,
    //private clasesApi: ClasesService
    private firestore:  FirestoreService
  ) { }

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
}
