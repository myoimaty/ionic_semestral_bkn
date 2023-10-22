import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Iusuario } from '../interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosrandomService {

  constructor(private httpClient: HttpClient) { }

  // Método para obtener 20 usuarios random de la API
  getRandomUsers(): Observable<any[]> {
    const requests: Observable<any>[] = [];

    // Realizar 20 solicitudes para obtener 20 usuarios
    for (let i = 0; i < 20; i++) {
      requests.push(this.httpClient.get('https://randomuser.me/api/'));
    }

    // Unir los resultados de las solicitudes en un solo array
    return forkJoin(requests);
  }
}
