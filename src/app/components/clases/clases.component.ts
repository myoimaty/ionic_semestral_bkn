import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss'],
})
export class ClasesComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  asistencia() {
    this.router.navigate(['asis-docente'])
  }

}
