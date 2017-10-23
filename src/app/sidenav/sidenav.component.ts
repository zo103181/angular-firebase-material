import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material';

import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatDrawer;

  constructor(
    private sidenavService: SidenavService
  ) { }

  ngOnInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
}
