import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Perfil', icon: 'person-circle' },
    { title: 'APIDigimon', url: 'apipage', icon: 'grid' },
    { title: 'API', url: 'apihome', icon: 'home' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];

  public appApi = [
    { title: 'home', url: 'apihome', icon: 'home' },
    { title: 'add', url:'apiadd', icon: 'person-circle' },
    { title: 'list', url: 'apilist', icon: 'grid' },
    { title: 'update', url: 'apiupdate', icon: 'home' },
    { title: 'delete', url: 'apidelete', icon: 'home' },
    { title: 'update', url: 'apidetail', icon: 'home' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];
  constructor(
    private router: Router,
    private menuCotroller: MenuController
  ) {}

  mostrarMenu(){
    return this.router.url !== '/login'; //no se va a mostrar en el login
  }

  mostrarMenuApi(){
    const aux = ['apihome', 'apiadd', 'apilist', 'apiupdate', 'apidelete', 'apidetail']
    return aux.includes(this.router.url.substring(1)) // elimina el "/"
    //return this.router.url == '/apihome';
  }
}
