import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthfirebaseService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, pass: string) {
    try {
      const user = this.auth.signInWithEmailAndPassword(email,pass);
      console.log(user);
    } catch (error) {
      console.error('Error en login: ', error);
    }
  }

  register() {

  }

  logout() {

  }

  checkAuth() {

  }
}
