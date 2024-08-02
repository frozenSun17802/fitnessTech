import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ChampionshipComponent } from './championship/championship.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './player/player.component';
import { MatchComponent } from './match/match.component';
import { ListChampionshipComponent } from './championship/list-championship/list-championship.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListTeamComponent } from './team/list-team/list-team.component';
import { AddTeamComponent } from './championship/add-team/add-team.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NewPlayerComponent } from './player/new-player/new-player.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ChampionshipComponent,
    TeamComponent,
    PlayerComponent,
    MatchComponent,
    ListChampionshipComponent,
    ListTeamComponent,
    AddTeamComponent,
    NewPlayerComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserModule,
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
