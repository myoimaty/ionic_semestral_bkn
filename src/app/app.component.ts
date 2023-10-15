import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Perfil', icon: 'person-circle' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];
  constructor() {}
}
