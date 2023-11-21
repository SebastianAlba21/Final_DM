import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}

  // Función para crear un estudiante
  crearUsuario(record: any) {
    return this.firestore.collection('Padres').add(record);
  }

  // Función para leer todos los estudiantes
  leerUsuario() {
    return this.firestore.collection('Padres').snapshotChanges();
  }

  // Función para crear un hijo para un padre específico
  crearHijo(hijo: any) {
    // Agregar el hijo a la subcolección "Hijos" del padre específico
    return this.firestore
      .collection('Padres')
      .doc('idPadre')
      .collection('Hijos')
      .add(hijo);
  }

  // Función para obtener todos los hijos de un padre específico
  obtenerHijos() {
    // Obtener la subcolección "Hijos" del padre específico
    return this.firestore
      .collection('Padres')
      .doc('idPadre')
      .collection('Hijos')
      .snapshotChanges();
  }
}
