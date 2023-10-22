import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasesService } from 'src/app/services/api/clases.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  //INSTANCIA que recibe la info
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

  updateClase(){
    this.apiService.updateClase(this.clase).subscribe();
    this.router.navigate(['/apilist'])
  }

  deleteClase(){
    this.apiService.deleteClase(this.clase).subscribe();
    this.router.navigate(['/apilist'])
  }


}
