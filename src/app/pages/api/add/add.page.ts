import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iclase } from 'src/app/interfaces/iclase';
import { Iclases } from 'src/app/interfaces/iclases';
import { ClasesService } from 'src/app/services/api/clases.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  //INSTANCIA CREADA PARA TEST
  clase: Iclase = {
    nombre: '',
    docente: '',

  }

  constructor(private apiServices: ClasesService,
    private router: Router) { }

  ngOnInit() {
  }

  addClase(){
    this.apiServices.addClase(this.clase).subscribe()
    this.router.navigate(['/apilist'])
  }
}
