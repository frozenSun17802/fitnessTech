import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  @Output() featureLoaded = new EventEmitter<string>();
  championShip() {
    this.featureLoaded.emit('championShip');
  }
  Team() {
    this.featureLoaded.emit('team');
  }
  Player() {
    this.featureLoaded.emit('player');
  }
  Match() {
    this.featureLoaded.emit('match');
  }
}
