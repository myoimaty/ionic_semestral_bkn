import { Injectable } from '@angular/core';
import { Clases } from '../pages/home/home.model';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  Clases: Clases[] = [
    {
      id: '1',
      nombre: 'Arquitectura',
      nomProf: 'Lanette Jeonelli',
    },
    {
      id: '2',
      nombre: 'Calidad Software',
      nomProf: 'Tulio Japia',
    },
    {
      id: '3',
      nombre: 'Estadistica Descriptiva',
      nomProf: 'Gatricio Parcia',
    },
    {
      id: '4',
      nombre: 'Etica Para el trabajo',
      nomProf: 'Vaura Pera',
    },
    {
      id: '5',
      nombre: 'Ingles intermedio',
      nomProf: 'Ratrizzia Piretti',
    },
    {
      id: '6',
      nombre: 'Fe cristiana',
      nomProf: 'Pugenio Earedes',
    },
    {
      id: '7',
      nombre: 'Pro. Portafolio',
      nomProf: 'Mristian Cartinez',
    },
    {
      id: '8',
      nombre: 'Prog. Apps Mobiles',
      nomProf: 'Jrancisco Fuillet',
    },
  ]

  constructor() {}

  //metodo custom
  //devuelve el objeto completo
  getAll(){
    return [...this.Clases]
  }
  //metodo devuelve la clase por id
  getClase(id: string) {
    return{
      ...this.Clases.find(aux =>  {
        return aux.id === id
      })
    }
  }

  //metodo que agrega clases
  addClase(nombre: string, nomProf: string) {
    this.Clases.push({
      nombre, nomProf, id: this.Clases.length + 1 + ""
    }) 
  }
  //metodo que elimina clases
  deleteClase(id: string){
    this.Clases = this.Clases.filter(aux => {
      return aux.id !== id
    })
  }
}
