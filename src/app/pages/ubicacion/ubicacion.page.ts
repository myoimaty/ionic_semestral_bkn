import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  map!: L.Map;
  
  constructor() { }

  ngOnInit() {
    this.map = L.map('map', {
      center: [-33.59824701530573, -70.57847018523768],
      zoom: 15,
      renderer: L.canvas()
    })
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
    
  }

}
