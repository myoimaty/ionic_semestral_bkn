import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iferiados } from '../interfaces/iferiados';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {
  apiURL = 'https://api.victorsanmartin.com/feriados';

  constructor(private httpClient: HttpClient) { }

  getferiado(id: Number): Observable<Iferiados>{
    return this.httpClient.get<Iferiados>(`${this.apiURL}`);
  }
  listderiado(): Observable<Iferiados>{
    return this.httpClient.get<Iferiados>(`${this.apiURL}`);
  }
}

  

