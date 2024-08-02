import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { championEntities, championshipsDelete, championshipsShows, championshipsinsertSend, championshipsinsertUpdate } from 'src/app/Models/ChampionShip-form-Model';
import { requsetInterface } from 'src/app/Models/requset-form-model';
import { championshipsResult } from 'src/app/Models/championShipResult-form-model';
@Injectable({
  providedIn: 'root'
})
export class ChampionshipService {

  constructor(private http: HttpClient) { }

  private Api_Get: string = 'https://localhost:3001/api/Championship/get-All';
  private Api_Add: string = 'https://localhost:3001/api/Championship/insert';
  private Api_Delete: string = 'https://localhost:3001/api/Championship/delete';
  private Api_Update: string = 'https://localhost:3001/api/Championship/update';

  showChampionShip(requst: requsetInterface): Observable<championshipsShows> {
    return this.http.post(this.Api_Get, requst) as Observable<championshipsShows>;

  }

  InsertChampionShip(requst: championshipsinsertSend): Observable<championshipsResult> {
    return this.http.post(this.Api_Add, requst) as Observable<championshipsResult>;
  }

  DeleteChampionShip(requst: championshipsDelete): Observable<championshipsResult> {
    return this.http.post(this.Api_Delete, requst) as Observable<championshipsResult>;
  }

  UpdateChampionShip(requst: championEntities): Observable<championshipsResult> {
    return this.http.post(this.Api_Update, requst) as Observable<championshipsResult>;
  }



}
