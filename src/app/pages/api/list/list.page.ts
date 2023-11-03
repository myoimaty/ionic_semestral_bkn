import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasesService } from 'src/app/services/api/clases.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  
  listarCLases: any = [];

  constructor(private router: Router,
    private clasesApi: ClasesService) { }

  ngOnInit() {
    this.clasesApi.listClases().subscribe((resp) => {
      //console.log(resp)
      this.listarCLases = resp
    })
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
  this.firestore.getCollection('clase').subscribe((clase))
  }
}
