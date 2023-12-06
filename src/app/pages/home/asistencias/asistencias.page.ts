import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/services/api/clases.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Clases } from '../home.model';
import { TranslateService } from '@ngx-translate/core';
import { AuthfirebaseService } from 'src/app/services/firebase/authfirebase.service';
import { FirestoreService } from 'src/app/services/firebase/firestore.service';
import { Iclase } from 'src/app/interfaces/iclase';
import { Iasist } from 'src/app/interfaces/iasist';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.page.html',
  styleUrls: ['./asistencias.page.scss'],
})
export class AsistenciasPage implements OnInit {

  langs: string[] = [];
  idioma!: string;
  asistencias: Iasist[] = [];

  clase! : Iclase;
  

  constructor(private apiService: ClasesService,
    private router: Router,
    private transService: TranslateService,
    private firestore: FirestoreService,
    private auth: AuthfirebaseService,
    private route: ActivatedRoute,
    private datePipe: DatePipe,) 
    { 
      this.langs = this.transService.getLangs();
    }

  ngOnInit() {
    this.getClase(this.getId());
    const estudianteId = this.route.snapshot.paramMap.get('id');
    this.loadAsistencias(estudianteId);
  }

  loadAsistencias(estudianteId: string | null) {
    if (estudianteId) {
      this.firestore.getAsistenciasPorEstudianteId(estudianteId).subscribe((asistencias) => {
        this.asistencias = asistencias;
      });
    }
  }

  formatDate(date: String): string {
    const formattedDate = this.datePipe.transform(date.toString(), 'yyyy-MM-dd');
    return formattedDate || '';
  }

  ionViewWillEnter(){

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
  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }

  ubicacion() {
    this.router.navigate(['ubicacion'])
  }

  scanQR() {
    this.router.navigate(['lector'])
  }
}
