import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  @Input() mostrarHeader: boolean = true;
  @Input() mostrarBoton: boolean = true;
  @Input() ingresardocente: boolean = true;
  @Input() mostrarREgistrar: boolean = true;


  timesArray(n: number): any[] {
    return Array(n);
  }

  constructor(private router: Router) { }

  ngOnInit() {}

  home() {
    this.router.navigate(['/home']);
  }

  registrar() {
    this.router.navigate(['/crear-usuario']);
  }
  homedocente() {
    this.router.navigate(['/apilist']);
  }
}