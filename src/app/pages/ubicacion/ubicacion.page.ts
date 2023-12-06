import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import Swal from 'sweetalert2'; // Importa la librería SweetAlert

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  latitud?: number;
  longitud?: number;
  duocLatitud = -33.59866725528076;
  duocLongitud = -70.5795353451614;
  distanciaMaxima = 80; // Define el radio en metros
  habilitarBotonEscaneo?: boolean;
  mensajeAlerta: string = ''; // Agrega esta línea

  constructor(private router: Router, private geolocation: Geolocation) { }

  ngOnInit() {

  }

  async mostrarError(mensaje: string) {
    await Swal.fire({
      icon: 'error', // Tipo de ícono (puedes cambiarlo según tus necesidades)
      title: 'Error',
      text: mensaje,
      confirmButtonText: 'Entendido', // Texto del botón de confirmación
      heightAuto: false
    });
  }

  getLocation() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;

      // Calcula la distancia entre la ubicación actual y el centro de la casa de estudios
      const distancia = this.calcularDistancia(this.latitud, this.longitud, this.duocLatitud, this.duocLongitud);

      // Habilita o deshabilita el botón de escaneo según la distancia
      if (distancia <= this.distanciaMaxima) {
        // El estudiante está dentro del radio, habilitar el botón
        this.habilitarBotonEscaneo = true;
        this.mensajeAlerta = 'Estás dentro del radio permitido para escanear el código QR.';
      } else {
        // El estudiante está fuera del radio, deshabilitar el botón
        this.habilitarBotonEscaneo = false;
        this.mensajeAlerta = 'No estás dentro del radio permitido para escanear el código QR.';
      }

    }).catch((error) => {
      console.log('Error al obtener locación', error);
      this.mensajeAlerta = 'Error al obtener la ubicación.';
      this.mostrarError(this.mensajeAlerta); // Muestra un mensaje de error utilizando SweetAlert
    });
  }

  scanQR() {
    if (this.habilitarBotonEscaneo) {
      this.router.navigate(['lector']);
    } else {
      // El estudiante está fuera del radio, muestra un mensaje de error
      this.mostrarError(this.mensajeAlerta);
    }
  }

  private calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number): number {
    // Fórmula de Haversine para calcular la distancia entre dos coordenadas
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c * 1000; // Distancia en metros
    return distance;
  }

  private toRad(value: number): number {
    return value * Math.PI / 180;
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
