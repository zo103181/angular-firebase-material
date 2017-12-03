import { Component, ViewChild, OnInit } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { MatMenu } from '@angular/material/menu/typings/menu-directive';
import { MatTableDataSource } from '@angular/material/table';

import { Contact } from '../../classes/contact.class';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<Contact>();
  displayedColumns = ['checked', 'name', 'menu'];

  constructor(private contactService: ContactService) { }

  ngAfterViewInit() {
    this.contactService.getContacts().subscribe(data => {
      this.dataSource.data = data;
    });
  }
}