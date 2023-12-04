import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  latitud?: number;
  longitud?: number;
  duocLatitud = -33.597925302256705;
  duocLongitud = -70.57919974602049;

  constructor(private router: Router, private geolocation: Geolocation) { }

  ngOnInit() {

  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error al obtener locación', error);
    });
  }

  scanQR() {
    this.router.navigate(['lector'])
  }

}

/* POR SI SE REQUIERE EL MAPA

import * as L from 'leaflet';

map!: L.Map;


this.map = L.map('map', {
      center: [-33.59824701530573, -70.57847018523768],
      zoom: 15,
      renderer: L.canvas()
    })
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);

    */
