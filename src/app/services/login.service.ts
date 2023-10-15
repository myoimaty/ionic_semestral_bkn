import { Injectable } from '@angular/core';
import { Login } from '../pages/login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: Login[] = [
    {
      id:'1',
      usuario: 'john.doe@duocuc.cl',
      password: '123',
 
    },
    {
      id:'2',
      usuario: 'xd@duocuc.cl',
      password: '123',

    }
  ]

  constructor() { }

  //METODOS CUSTOM
  //METODO QUE AGREGA UN USUARIO
  addUsuario(usuario: string, password: string) {
    // Generar un nuevo ID único
    const newId = (this.login.length + 1).toString();
    
    // Agregar el nuevo usuario con el ID generado
    this.login.push({
      id: newId,
      usuario,
      password,
    });
  }
}
