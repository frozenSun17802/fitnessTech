import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { championEntities, championshipsShows, championshipsinsertUpdate } from 'src/app/Models/ChampionShip-form-Model';
import { requsetInterface } from 'src/app/Models/requset-form-model';
import { requsetInterfaceTeam, teamEntities, teamShows } from 'src/app/Models/team-model/team-form-model';
import { ChampionshipService } from 'src/app/Service/championship-Service/championship.service';
import { TeamService } from 'src/app/Service/team-Service/team.service';

@Component({
  selector: 'app-list-championship',
  templateUrl: './list-championship.component.html',
  styleUrls: ['./list-championship.component.css']

})
export class ListChampionshipComponent {
  constructor(private service: ChampionshipService, private service1: TeamService) { }



  @Output() UpdateChampionShip = new EventEmitter<championEntities>();

  keychampion: number = 0;
  championships?: Observable<championshipsShows>;
  championships2: championEntities[] = [];
  isDeleted: boolean = false;
  //isshowTeams: boolean = false;

  teamThatFind?: Observable<teamShows>;
  teamshows2: teamEntities[] = [];

  req: requsetInterface = {
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

  ngOnInit(): void {
    this.championships = this.service.showChampionShip(this.req);
    this.championships?.forEach(data => data.entities.forEach(data1 => this.championships2.push(data1)));
  }

  deleteChampionShip(key: number) {

    this.service.DeleteChampionShip({
      key: key,
      languageRef: 0
    }).subscribe(data => {
      if (data.success == true) {
        this.isDeleted = true;
      }
    });
  }

  updateChampionship(request: championEntities) {
    this.UpdateChampionShip.emit(request);
  }


  req1: requsetInterfaceTeam = {
    championshipId: this.keychampion,
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
  showsTeambyname(key: number) {
    this.keychampion = key;
    this.req1.championshipId = key;
    this.teamshows2 = [];
    this.teamThatFind = this.service1.showteamBychampionship(this.req1)
    this.teamThatFind.forEach(data => data.entities.forEach(data1 => this.teamshows2.push(data1)));
  }

  isteamRemove: boolean = false;
  teamRemoveFromChampion(championId: number, teamId: number) {
    this.service1.RemoveTeamFromChampion({
      championShipId: championId,
      teamId: teamId,
      languageRef: 0,
    }).subscribe(data => {
      if (data.success == true) {
        this.isteamRemove = true;
      }
    });
  }


  isTeamAdded: boolean = false;
  onTeamAdd(newteamName: string, championshipId: number) {
    this.service1.AddTeamInChampion({
      name: newteamName,
      numberOfWin: 0,
      numberOfLose: 0,
      championShipId: championshipId,
      languageRef: 0,
    }).subscribe(data => {
      if (data.success == true) {
        this.isTeamAdded = true;
      }
    });
  }




}



