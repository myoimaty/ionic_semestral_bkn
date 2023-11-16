import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClasesService } from 'src/app/services/api/clases.service';
import * as QRCode from 'qrcode';
import Swal from 'sweetalert2';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import { Iclase } from 'src/app/interfaces/iclase';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  qrCodeImageUrl: string = '';
  scannedClasses: string[] = [];


  //INSTANCIA que recibe la info
  clase! : Iclase;

  constructor(
    private firestore: FirestoreService,
    private router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.getClase(this.getId());
    this.generateQRCode(); // Genera el código QR cuando la página se carga
  }

  generateQRCode() {
    /*const classId = this.clase.id.toString();
    const qrCodeData = `asistencia+1:${classId}`; // Ajusta el formato según tus necesidades
    try {
      QRCode.toDataURL(qrCodeData).then(url => {
        this.qrCodeImageUrl = url;
      }).catch(error => {
        console.error(error);
        // Maneja el error como desees
      });
    } catch (error) {
      console.error(error);
      // Maneja el error como desees
    }*/
  }

  ionViewWillEnter(){
    this.getClase(this.getId())
  }

  getId(){
    let url = this.router.url
    let aux = url.split("/",3)
    let id = aux[2]
    return id 
  }

  getClase(id: string){
    /*this.apiService.getClase(id).subscribe((resp:any) => {
      this.clase = {
        id: resp[0].id,
        nombre: resp[0].nombre,
        docente: resp[0].docente
      }
    })*/
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
    this.router.navigate(['/apilist']);
    this.mensaje("Clase actualizada")
  }

  deleteClase(){
    //this.apiService.deleteClase(this.clase).subscribe();
    const claseId = this.route.snapshot.paramMap.get('id'); //Captura info que viene desde la lista
    if (claseId) {
      this.firestore.deleteDocument('Clases', claseId);
      this.router.navigate(['/apilist']);
      this.mensaje("Clase eliminada")
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
