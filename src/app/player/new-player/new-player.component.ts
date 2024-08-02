import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { playerEntities } from 'src/app/Models/player-model/player-forms-model';
import { PlayerService } from 'src/app/Service/player-Service/player.service';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ref: MatDialogRef<NewPlayerComponent>, private service: PlayerService) { }
  firstname: string = '';
  lastname: string = '';
  dateofBirth: string = '';
  position: string = '';


  isUpdatePlayer: boolean = false;
  isPlayerAdded: boolean = false;
  SavePlayer() {
    if (this.data.Condition == 'Add') {
      this.service.Addplayer({
        firstName: this.firstname,
        lastName: this.lastname,
        dateOfBirth: this.dateofBirth,
        position: this.position,
        languageRef: 0,
        teamId: this.data.TeamId,
      }).subscribe(data => {
        if (data.success == true) {
          this.isPlayerAdded = true;
        }
      });
    } else if (this.data.Condition == 'Edit') {
      this.service.Editplayer({
        key: this.data.player.key,
        firstName: this.firstname,
        lastName: this.lastname,
        position: this.position,
        languageRef: 0,
        teamId: this.data.TeamId,
        dateOfBirth: this.dateofBirth,
      }).subscribe(da => {
        if (da.success == true) {
          this.isUpdatePlayer = true;
        }
      });

    }
  }

  cancelpopUp() {
    this.ref.close();
  }

  ngOnInit(): void {
    if (this.data.Condition == 'Edit') {
      this.firstname = this.data.player.firstName,
        this.lastname = this.data.player.lastName;
      this.position = this.data.player.position;
    }

  }

}
