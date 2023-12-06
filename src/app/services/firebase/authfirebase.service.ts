import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirestoreService } from './firestore.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthfirebaseService {

  constructor(private auth: AngularFireAuth, private router: Router, private firestore2: FirestoreService,private firestore: AngularFirestore) { }

  async login(email: string, pass: string) {
    try {
      const user = await this.auth.signInWithEmailAndPassword(email,pass);
      if(user) {
        this.router.navigate(['home']);
      }
      console.log(user);
    } catch (error) {
      console.error('Error en login: ', error);
    }
  }

  async loginDocente(email: string, pass: string) {
    try {
      const user = await this.auth.signInWithEmailAndPassword(email,pass);
      if(user) {
        this.router.navigate(['apilist']);
      }
      console.log(user);
    } catch (error) {
      console.error('Error en login: ', error);
    }
  }

  async register(email: string, pass: string) {
    try {
      const user = await this.auth.createUserWithEmailAndPassword(email,pass);
      this.auth.signInWithEmailAndPassword(email,pass);
      console.log(user);
    } catch (error) {
      console.error('Error en register: ', error);
    }
  }

  async logout() {
    try {
      await this.auth.signOut();
      //this.router.navigate(['login']);
    } catch (error) {
      console.error('Error en logout: ', error);
    }
  }

  checkAuth() {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        resolve(user);
      }, (error) => {
        reject(error);
      });
    });
  }

  async recuperar(email: string) {
    try {
      await this.auth.sendPasswordResetEmail(email);
      console.log('Correo de recuperación de contraseña enviado exitosamente.');
    } catch (error) {
      console.error('Error al enviar el correo de recuperación de contraseña:', error);
    }
  }

  async getInformacionEstudiante() {
    try {
      // Obtener información del estudiante desde el servicio de autenticación de Firebase
      const usuarioActual = await this.auth.currentUser;
      return {
        nombre: usuarioActual?.displayName || 'Nombre por defecto del estudiante',
        // Otras propiedades según sea necesario
      };
    } catch (error) {
      console.error('Error al obtener información del estudiante:', error);
      return {}; // O manejar el error de alguna manera
    }
  }
  
  async getInformacionDocente() {
    try {
      // Obtener información del docente desde el servicio de autenticación de Firebase
      const usuarioActual = await this.auth.currentUser;
      return {
        nombre: usuarioActual?.displayName || 'Nombre por defecto del docente',
        // Otras propiedades según sea necesario
      };
    } catch (error) {
      console.error('Error al obtener información del docente:', error);
      return {}; // O manejar el error de alguna manera
    }
  }

  getUserInfo() {
    return this.auth.currentUser;
  }

}
