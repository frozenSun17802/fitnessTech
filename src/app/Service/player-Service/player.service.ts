import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerAdd, PlayerAddResult, PlayerEdit, PlayerRemove, PlayerRequest, PlayerShows } from 'src/app/Models/player-model/player-forms-model';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  private Api_Get: string = 'https://localhost:3001/api/Player/get-by-teamID';
  private Api_Add: string = 'https://localhost:3001/api/Player/insert';
  private Api_remove: string = 'https://localhost:3001/api/Player/remove-player-from-team';
  private Api_edit: string = 'https://localhost:3001/api/Player/update';


  showplayer(requst: PlayerRequest): Observable<PlayerShows> {
    return this.http.post(this.Api_Get, requst) as Observable<PlayerShows>;
  }

  Addplayer(requst: PlayerAdd): Observable<PlayerAddResult> {
    return this.http.post(this.Api_Add, requst) as Observable<PlayerAddResult>;
  }

  Removeplayer(requst: PlayerRemove): Observable<PlayerAddResult> {
    return this.http.post(this.Api_remove, requst) as Observable<PlayerAddResult>;
  }


  Editplayer(requst: PlayerEdit): Observable<PlayerAddResult> {
    return this.http.post(this.Api_edit, requst) as Observable<PlayerAddResult>;
  }




}
