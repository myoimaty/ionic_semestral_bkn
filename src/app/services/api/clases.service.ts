import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iclase } from 'src/app/interfaces/iclase';
import { Iclases } from 'src/app/interfaces/iclases';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  apiURL = "https://jsonserverbkn.onrender.com"

  constructor(private httpClient: HttpClient) { }

  listClases(): Observable<Iclases>{
    return this.httpClient.get<Iclases>(`${this.apiURL}/clases`);
  }

  addClase(clase: Iclase): Observable<Iclase> {
    return this.httpClient.post<Iclase>(`${this.apiURL}/clases`, clase);
  }

  getClase(id: Number): Observable<Iclases>{
    return this.httpClient.get<Iclases>(`${this.apiURL}/clases/?id=${id}`);
  }

  updateClase(clase: any): Observable<Iclases> {
    return this.httpClient.put<Iclases>(`${this.apiURL}/clases/${clase.id}`, clase);
  }

  deleteClase(clase: any): Observable<Iclases> {
    return this.httpClient.delete<Iclases>(`${this.apiURL}/clases/${clase.id}`);
  }
}
