import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/services/api/clases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clases } from '../home.model';


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  clase = {
    id: '',
    nombre: '',
    docente: '',

  }

  constructor(private apiService: ClasesService,
    private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getClase(this.getId())
  }

  getId(){
    let url = this.router.url
    let aux = url.split("/",3)
    let id = parseInt(aux[2])
    return id 
  }

  getClase(id: Number){
    this.apiService.getClase(id).subscribe((resp:any) => {
      this.clase = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        docente: resp[0].docente
      }
    })
  }
}
