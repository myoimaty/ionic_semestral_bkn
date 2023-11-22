import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  langs: string[] = [];
  idioma!: string;

  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Perfil', icon: 'person-circle' },
    { title: 'APIDigimon', url: 'apipage', icon: 'grid' },
    { title: 'Feriados', url: 'feriados', icon: 'calendar-number' },
    { title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  ];

  //public appApi = [
    //{ title: 'home', url: 'apihome', icon: 'home' },
    //{ title: 'add', url:'apiadd', icon: 'person-circle' },
    //{ title: 'list', url: 'apilist', icon: 'grid' },
    //{ title: 'update', url: 'apiupdate', icon: 'home' },
    //{ title: 'delete', url: 'apidelete', icon: 'home' },
    //{ title: 'update', url: 'apidetail', icon: 'home' },
    //{ title: 'Cerrar Sesión', url: 'login', icon: 'log-out' },
  //];
  constructor(
    private router: Router,
    private menuCotroller: MenuController,
    private transService: TranslateService,
  ) {
    this.langs = this.transService.getLangs();
    this.transService.setDefaultLang('es');
    this.transService.addLangs(['en', 'fr']);
  }

  mostrarMenu() {
    // La función devuelve verdadero si la URL actual no es ni '/login' ni '/terminos'
    return this.router.url !== '/login' && this.router.url !== '/terminos' && this.router.url !== '/login-docentes'&& this.router.url !== '/rest-contrasena';
  }

  mostrarMenu2(){
    return this.router.url !== '/terminos'; //no se va a mostrar en el login
  }

  mostrarMenuApi(){
    const aux = ['apihome', 'apiadd', 'apilist', 'apiupdate', 'apidelete', 'apidetail']
    return aux.includes(this.router.url.substring(1)) // elimina el "/"
    //return this.router.url == '/apihome';
  }

  changeLangs(event: any) {
    this.transService.use(event.detail.value);
  }


}
