import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Iferiados } from '../interfaces/iferiados';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {
  apiURL = 'https://api.victorsanmartin.com/feriados';

  constructor(private httpClient: HttpClient) { }

  listderiado(): Observable<Iferiados[]> {
    return this.httpClient.get<any>(this.apiURL).pipe(
      map(response => response.data as Iferiados[])
    );
  }
}

  

