import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-tile title="Tile 1" content="This is the content of Tile 1"></app-tile>
    <app-tile title="Tile 2" content="This is the content of Tile 2"></app-tile>
  `
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = false;

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
