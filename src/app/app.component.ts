import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth : number;
  expanded : boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SideNav';

  isSideNavexpanded = false;
  screenWidth = 0;

  onToggleSideNav(data:SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavexpanded = data.expanded;
  }
}
