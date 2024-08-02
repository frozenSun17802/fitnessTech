import { Component, EmbeddedViewRef, EventEmitter, Input, Output } from '@angular/core';
import { PlayerService } from '../Service/player-Service/player.service';
import { Observable } from 'rxjs';
import { PlayerRequest, PlayerShows, playerEntities } from '../Models/player-model/player-forms-model';
import { MatDialog } from '@angular/material/dialog';
import { ChampionshipComponent } from '../championship/championship.component';
import { ListChampionshipComponent } from '../championship/list-championship/list-championship.component';
import { NewPlayerComponent } from './new-player/new-player.component';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  constructor(private service: PlayerService, private dialogRef: MatDialog) { }

  @Input() teamId: number = 0;

  players?: Observable<PlayerShows>;
  players2: playerEntities[] = [];


  req1: PlayerRequest = {
    teamId: this.teamId,
    take: 0,
    page: 0,
    disablePaging: true,
    sort: [
      {
        dir: '',
        field: '',
        order: 0,
      }
    ],
    filter: {
      logic: '',
      filters: [
        {
          groupId: 0,
          dataType: '',
          parameterName: '',
          field: '',
          operator: '',
          value: {}
        }
      ]
    },
    languageRef: 0,
  }
  showPlayers() {
    this.players2 = [];
    this.req1.teamId = this.teamId;
    this.players = this.service.showplayer(this.req1);
    this.players?.forEach(data => data.entities.forEach(data1 => this.players2.push(data1)));

  }

  openDialog(condition: string) {
    this.dialogRef.open(NewPlayerComponent, {
      width: '60%',
      height: '400px',
      data: {
        TeamId: this.teamId,
        Condition: condition,
        player: this.UpdatePlayer,
      }
    });
  }
  isPlayerRemove: boolean = false;
  removePlayer(playerId: number) {
    this.service.Removeplayer({
      teamId: this.teamId,
      playerId: playerId,
      languageRef: 0,
    }).subscribe(data => {
      if (data.success == true) {
        this.isPlayerRemove = true;
      }
    });
  }

  UpdatePlayer: any;
  updatePlayer(player: playerEntities) {
    this.UpdatePlayer = player;
    this.openDialog('Edit');
  }


}
