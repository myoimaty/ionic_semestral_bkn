import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iusuario } from '../interfaces/iusuario';

type Iusuarios = Iusuario[];

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiURL = "https://jsonserverbkn.onrender.com";

  constructor(private httpClient: HttpClient) {}

  listUser(): Observable<Iusuarios> {
    return this.httpClient.get<Iusuarios>(`${this.apiURL}/usuarios`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private usuariosService: UsuariosService) {}

  authenticate(user: Iusuario): Promise<boolean> {
    console.log('Usuario que intenta iniciar sesión:', user);
    return new Promise((resolve, reject) => {
      this.usuariosService.listUser().subscribe((users: Iusuarios) => {
        console.log('Usuarios en la base de datos:', users); // Verifica si los usuarios se cargan correctamente
  
        let foundUser: Iusuario | undefined;
        for (const currentUser of users) {
          console.log('Comparando con usuario actual:', currentUser); // Verifica cada usuario en el bucle
  
          if (currentUser.email === user.email && currentUser.password === user.password) {
            foundUser = currentUser;
            break;
          }
        }
  
        console.log('Usuario encontrado:', foundUser); // Verifica si se encontró un usuario correspondiente
  
        resolve(!!foundUser);
      }, error => {
        reject(error);
      });
    });
  }
}
