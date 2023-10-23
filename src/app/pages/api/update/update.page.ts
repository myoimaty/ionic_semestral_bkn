import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iclase } from 'src/app/interfaces/iclase';
import { ClasesService } from 'src/app/services/api/clases.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

    //INSTANCIA que recibe la info
    clase = {
      id: 0,
      nombre: 'TEST',
      docente: 'TEST',
  
    }

  constructor(private apiService: ClasesService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.getId)
    
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
    this.mensaje("Clase actualizada")
  }

  async mensaje(mensaje: string) {
    await Swal.fire({
      icon: 'success', // Tipo de ícono (puedes cambiarlo según tus necesidades)
      title: mensaje,
      confirmButtonText: 'Entendido', // Texto del botón de confirmación
      heightAuto: false
    });
  }

}
