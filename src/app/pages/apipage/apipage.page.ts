import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apipage',
  templateUrl: './apipage.page.html',
  styleUrls: ['./apipage.page.scss'],
})
export class ApipagePage implements OnInit {

  digimones: any[] = [];
  paginaActual = 0;
  

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos(){
    const url = `https://www.digi-api.com/api/v1/digimon?page=${this.paginaActual}`
    this.httpClient.get<any>(url).subscribe(resultado => {
      this.digimones = resultado.content;
    });

  }

  cargarPagina(){
    this.paginaActual++;
    this.cargarDatos();

  }
  cargarPaginaant(){
    this.paginaActual--;
    this.cargarDatos();

  }
}

