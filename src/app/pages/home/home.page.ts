import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Clases } from './home.model';
import { ClasesService } from 'src/app/services/api/clases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listarCLases: any = [];

  constructor(private router: Router,
    private clasesApi: ClasesService) { }

  ngOnInit() {
    this.clasesApi.listClases().subscribe((resp) => {
      //console.log(resp)
      this.listarCLases = resp
    })
  }

  ionViewWillEnter(){
     this.listar();
  }

  listar(){
    this.clasesApi.listClases().subscribe((resp) => {
      //console.log(resp)
      this.listarCLases = resp
    })
    //this.listarCLases = this.ClasesService.getAll()
  }

  asistencia() {
    this.router.navigate(['asistencias'])
  }
}
