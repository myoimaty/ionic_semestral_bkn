import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iclase } from 'src/app/interfaces/iclase';
import { ClasesService } from 'src/app/services/api/clases.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

    //INSTANCIA que recibe la info
    clase! : Iclase;

  constructor(private apiService: ClasesService,
    private router: Router,
    private firestore: FirestoreService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    const claseId = this.route.snapshot.paramMap.get('id');
    if (claseId) {
      this.getClase(claseId);
    }
  }

  ionViewWillEnter(){
    //this.getClase(this.getId())
  }

  getId(){
    let url = this.router.url
    let aux = url.split("/",3)
    let id = aux[2]
    return id 
  }

  getClase(id: string){
    const claseId = this.route.snapshot.paramMap.get('id');

    if ( claseId ) {
      this.firestore.getClaseById('Clases', claseId).subscribe( (clase) => {
        this.clase = clase || {} as Iclase;
        this.clase.id = claseId;
      });
    }
  }

  updateClase(){
    //this.apiService.updateClase(this.clase).subscribe();
    const claseId = this.route.snapshot.paramMap.get('id');
    if (claseId) {
      this.firestore.updateDocument('Clases', claseId, this.clase);
      this.router.navigate(['/apilist'])
      this.mensaje("Clase actualizada")
    }
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
