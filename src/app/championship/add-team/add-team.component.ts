import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent {

  @Output() NewTeam = new EventEmitter<string>();
  name: string = '';
  AddTeamClicked() {
    this.NewTeam.emit(this.name);
  }
}
