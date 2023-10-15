import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: any[] = []; // Almacena los usuarios registrados


  registerUser(username: string, password: string, conductor: boolean) {
    // Simula el registro de un usuario
    this.users.push({ username, password, conductor });
  }

  loginUser(username: string, password: string) {
    // Simula la verificación de inicio de sesión
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    return user !== undefined;
  }
  // Agrega un método para obtener el nombre de usuario del localStorage
  getUserName(): string | undefined {
    const storedUser = JSON.parse(localStorage.getItem('usuario') || '{}');
    return storedUser.nombre;
  }
}
