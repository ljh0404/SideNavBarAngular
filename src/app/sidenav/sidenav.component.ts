import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { navBarDataMenu, navBarDataSoporte } from './nav-data';

interface SideNavToggle{
  screenWidth : number;
  expanded : boolean;
  //opacity : number;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})


export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav : EventEmitter<SideNavToggle> = new EventEmitter();
  expanded = true;
  screenWidth = 0;
  navDataMenu = navBarDataMenu;
  navDataSoporte = navBarDataSoporte;
  mostrarTooltip: boolean = false;
  //opacity = 1;
  /*
  @HostListener('window: resize:',['$event']) 
  onResize(event : any){
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768){
      this.expanded = false;
      this.onToggleSideNav.emit({expanded: this.expanded, screenWidth: this.screenWidth});
    }
  }
  */
  ngOnInit(): void {
      this.screenWidth = window.innerWidth;
  }

  toggleexpanded(): void {
    //falta realizar cambios par la opcidad del texto
    if (this.expanded) {
      //this.opacity = 0;
      this.expanded= !this.expanded;
      this.onToggleSideNav.emit({expanded: this.expanded, screenWidth: this.screenWidth});
    }

    else{
      //this.opacity = 0;
      this.expanded= !this.expanded;
      this.onToggleSideNav.emit({expanded: this.expanded, screenWidth: this.screenWidth});
    }
    //if 
  }
  closeSidenav(): void{
    this.expanded=false;
    this.onToggleSideNav.emit({expanded: this.expanded, screenWidth: this.screenWidth});
  }

  mostrarNombre(): void {
    console.log("hola");
  }

  mostrarToolTip(): void {
    //this.mostrarTooltip = true;
  }

  ocultarToolTip(): void {
    //this.mostrarTooltip = false;
  }
}
