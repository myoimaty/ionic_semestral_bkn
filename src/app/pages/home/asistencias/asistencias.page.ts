import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/services/api/clases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clases } from '../home.model';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  langs: string[] = [];
  idioma!: string;

  clase = {
    id: '',
    nombre: '',
    docente: '',

  }
  

  constructor(private apiService: ClasesService,
    private router: Router,
    private transService: TranslateService) 
    { 
      this.langs = this.transService.getLangs();
    }

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
  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }

  ubicacion() {
    this.router.navigate(['ubicacion'])
  }
}
