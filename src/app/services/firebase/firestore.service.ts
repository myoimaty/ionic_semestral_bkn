import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Iclase } from 'src/app/interfaces/iclase';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  getCollection(nombreColeccion: string) {
    return this.firestore.collection<Iclase>(nombreColeccion).valueChanges({ idField: 'id' });
  }

  createDocument(nombreColeccion: string, data: Iclase) {
    return this.firestore.collection<Iclase>(nombreColeccion).add(data);
  }

  updateDocument(nombreColeccion: string, documetId: string, data: Iclase) {
    return this.firestore.collection<Iclase>(nombreColeccion).doc(documetId).update(data);
  }

  deleteDocument(nombreColeccion: string, documetId: string) {
    return this.firestore.collection<Iclase>(nombreColeccion).doc(documetId).delete();
  }

  getClaseById(nombreColeccion: string, documetId: string) {
    return this.firestore.collection<Iclase>(nombreColeccion).doc(documetId).valueChanges();
  }
}