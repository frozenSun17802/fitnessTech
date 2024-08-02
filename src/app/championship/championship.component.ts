import { Component, Inject } from '@angular/core';
import { ChampionshipService } from '../Service/championship-Service/championship.service';
import { championEntities, championshipsinsertSend } from '../Models/ChampionShip-form-Model';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css']
})
export class ChampionshipComponent {


  constructor(private service: ChampionshipService) { }


  newchampion?: Observable<championshipsinsertSend>;

  name = '';
  startDate: Date = new Date;
  endDate: Date = new Date;
  location = '';
  description = 'No description';
  languageRef: number = 0;
  key: number = 0;
  requestupdate?: championEntities;

  isAdded = false;
  isUpdate = false;
  isUpdateDone = false;

  SendChampionShip() {

    if (!this.isUpdate) {
      console.log('addding');
      this.service.InsertChampionShip({
        name: this.name,
        startDate: this.startDate.toString(),
        endDate: this.endDate.toString(),
        location: this.location,
        description: this.description,
        languageRef: this.languageRef
      }).subscribe(data => {
        if (data.success === true) {
          this.isAdded = true;
        }
      });
    }
    else if (this.isUpdate) {

      this.service.UpdateChampionShip({
        key: this.key,
        name: this.name,
        location: this.location,
        startDate: this.startDate,
        endDate: this.endDate,
        description: this.description,
      }).subscribe(data => {
        if (data.success === true) {
          this.isUpdateDone = true;
        }
      });
    }
  }

  onUpdateChampionShip(request: championEntities) {
    this.name = request.name;
    this.startDate = request.startDate;
    this.endDate = request.endDate;
    this.location = request.location;
    this.description = request.description;
    this.key = request.key;
    this.isUpdate = true;

    // if (this.isUpdate) {
    //   this.service.UpdateChampionShip(request).subscribe(data => {
    //     if (data.success === true) {
    //       this.isUpdateDone = true;
    //     }
    //   });
    //}
  }
}




