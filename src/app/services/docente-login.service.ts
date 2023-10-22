import { Injectable } from '@angular/core';
import { UsuariosService } from './api/usuarios.service';
import { Iusuario } from '../interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class DocenteLoginService {
  constructor(private usuariosService: UsuariosService) {}

  authenticate(user: Iusuario): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.usuariosService.listUser().subscribe((users: any) => {
        // Convierte users en un array utilizando el operador de propagación
        const usersArray = [...users];
        
        let foundUser: Iusuario | undefined;
        for (const currentUser of usersArray) {
          if (
            currentUser.email === user.email &&
            currentUser.password === user.password &&
            currentUser.email.endsWith('@profesorduoc.cl')
          ) {
            foundUser = currentUser;
            break;
          }
        }
        resolve(!!foundUser);
      }, error => {
        reject(error);
      });
    });
  }
}
