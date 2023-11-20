import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Iferiados } from 'src/app/interfaces/iferiados';
import { FeriadosService } from 'src/app/services/feriados.service';

// Asegúrate de importar el servicio correctamente

@Component({
  selector: 'app-feriados',
  templateUrl: './feriados.page.html',
  styleUrls: ['./feriados.page.scss'],
})
export class FeriadosPage implements OnInit {

  langs: string[] = [];
  idioma!: string;

  listarferiados: Iferiados[] = [];

  constructor(private router: Router,private feriadosapi: FeriadosService, private transService: TranslateService) { }

  ngOnInit() {
    this.feriadosapi.listderiado().subscribe((data) => {
      this.listarferiados = data;
    });
  }

  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }

  listarf(){
    this.feriadosapi.listderiado().subscribe((resp) =>{
      this.listarferiados = resp
    })
  }


}






