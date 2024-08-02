import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pageLoading: string = 'homePage';
  onFeatureLoaded(page: string) {
    this.pageLoading = page;
  }
}
