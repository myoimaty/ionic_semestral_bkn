import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iusuario } from 'src/app/interfaces/iusuario';
import { Iusuarios } from 'src/app/interfaces/iusuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiURL = "https://jsonserverbkn.onrender.com"

  constructor(private httpClient: HttpClient) { }

  listUser(): Observable<Iusuarios>{
    return this.httpClient.get<Iusuarios>(`${this.apiURL}/usuarios`);
  }

  addUser(usuario: Iusuario): Observable<Iusuario> {
    return this.httpClient.post<Iusuario>(`${this.apiURL}/usuarios`, usuario);
  }

  getUser(id: Number): Observable<Iusuarios>{
    return this.httpClient.get<Iusuarios>(`${this.apiURL}/usuarios/?id=${id}`);
  }

  updateUser(usuario: any): Observable<Iusuarios> {
    return this.httpClient.put<Iusuarios>(`${this.apiURL}/usuarios/${usuario.id}`, usuario);
  }

  deleteUser(usuario: any): Observable<Iusuarios> {
    return this.httpClient.delete<Iusuarios>(`${this.apiURL}/usuarios/${usuario.id}`);
  }
}