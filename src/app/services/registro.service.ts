import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment.prod';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private baseUrl = enviroment.registroUrl;

  constructor(private http: HttpClient) { }

  save(usuario: Usuario, tipo: string): Observable<Usuario>{
    const payload = {
      usuario: {...usuario},
      tipo: tipo
    };
    return this.http.post<Usuario>(this.baseUrl, payload);
  }
}
