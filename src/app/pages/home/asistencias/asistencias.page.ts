import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/services/clases.service';
import { ActivatedRoute } from '@angular/router';
import { Clases } from '../home.model';

@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  clases! : Clases;

  constructor(private ClasesService: ClasesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux) {
        this.clases = this.ClasesService.getClase(aux) 
      }
    })
  }

}
