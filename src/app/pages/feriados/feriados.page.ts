import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iferiados } from 'src/app/interfaces/iferiados';
import { FeriadosService } from 'src/app/services/feriados.service';

// Asegúrate de importar el servicio correctamente

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  listarferiados: any = [];

  constructor(private router: Router,private feriadosapi: FeriadosService) { }

  ngOnInit() {

    this.feriadosapi.listderiado().subscribe((resp) =>{
      this.listarferiados = resp
    })
  }

  listarf(){
    this.feriadosapi.listderiado().subscribe((resp) =>{
      this.listarferiados = resp
    })
  }


}






