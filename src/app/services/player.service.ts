import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment.prod';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private baseUrl = enviroment.playerUrl;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Player[]>{
    return this.http.get<Player[]>(`${this.baseUrl}`);
  }

  findById(id: number): Observable<Player>{
    return this.http.get<Player>(`${this.baseUrl}/${id}`);
  }

  save(player: Player): Observable<Player>{
    return this.http.post<Player>(`${this.baseUrl}`, player);
  }

  update(id: number, player: Player): Observable<Player>{
    return this.http.put<Player>(`${this.baseUrl}/${id}`, player);
  }

  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  findByidUser(idUser: number): Observable<Player>{
    return this.http.get<Player>(`${this.baseUrl}/usuario/${idUser}`);
  }
}

