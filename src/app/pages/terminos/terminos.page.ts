import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.page.html',
  styleUrls: ['./terminos.page.scss'],
})
export class TerminosPage implements OnInit {

  langs: string[] = [];
  idioma!: string;
  terminosAceptados = false;
  ngOnInit() {
  }
  constructor(private navCtrl: NavController,
    private transService: TranslateService) { 
      this.langs = this.transService.getLangs();
    }
  aceptarTerminos() {
    // Guarda el estado de términos aceptados y luego navega a la página principal.
    // Puedes usar el NavController para la navegación.
    this.terminosAceptados = true;
    this.navCtrl.navigateRoot('/login'); 
  }
  onCheckboxChange() {
    this.terminosAceptados = !this.terminosAceptados; // Cambia el estado del checkbox
  }
  changeLangs(event: any) {
    const selectedLang = event.detail.value;
    this.transService.use(selectedLang);
    localStorage.setItem('appLang', selectedLang);
  }
  
  

}
