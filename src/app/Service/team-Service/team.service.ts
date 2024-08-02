import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { championshipsResult } from 'src/app/Models/championShipResult-form-model';
import { requsetInterfaceTeam, teamAdd, teamShows, teamremove } from 'src/app/Models/team-model/team-form-model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }
  private Api_Get: string = 'https://localhost:3001/api/Team/get-team';
  private Api_delete: string = 'https://localhost:3001/api/Team/remove-team-in-championship';
  private Api_AddTeam: string = 'https://localhost:3001/api/Team/insert';

  showteamBychampionship(requst: requsetInterfaceTeam): Observable<teamShows> {
    return this.http.post(this.Api_Get, requst) as Observable<teamShows>;
  }

  RemoveTeamFromChampion(requst: teamremove): Observable<championshipsResult> {
    return this.http.post(this.Api_delete, requst) as Observable<championshipsResult>;
  }

  AddTeamInChampion(requst: teamAdd): Observable<championshipsResult> {
    return this.http.post(this.Api_AddTeam, requst) as Observable<championshipsResult>;
  }
}