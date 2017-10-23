import { Injectable } from '@angular/core';
import { MatDrawer, MatDrawerToggleResult } from '@angular/material';

@Injectable()
export class SidenavService  {
  private sidenav: MatDrawer;

  constructor() {}

  close(): Promise<MatDrawerToggleResult> {
    return this.sidenav.close();
  }
  
  setSidenav(sidenav: MatDrawer) {
    this.sidenav = sidenav;
  }

  toggle(isOpen?: boolean): Promise<MatDrawerToggleResult> {
    return this.sidenav.toggle(isOpen);
  }
}
