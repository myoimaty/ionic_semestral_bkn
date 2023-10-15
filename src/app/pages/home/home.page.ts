import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Clases } from './home.model';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listarCLases: Clases[] = [];
  

  constructor(private ClasesService: ClasesService, private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.listarCLases = this.ClasesService.getAll()
  }

  asistencia() {
    this.router.navigate(['asistencias'])
  }
}
