import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Input } from '@angular/compiler/src/core';

import { Contact } from '../../classes/contact.class';
import { MatMenu } from '@angular/material/menu/typings/menu-directive';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contact: Contact;
  displayedColumns = ['checked', 'name', 'menu'];
  dataSource = new MatTableDataSource(CONTACT_DATA);

  constructor() { }

  ngOnInit() {
    this.contact = {
      checked: false,
      name: '',
      email: '',
      phone: ''
    };
  }

}

const CONTACT_DATA: Contact[] = [
  { checked: false, name: 'Abbott Keitch', email: 'abbott@withinpixels.com', phone: '(555) 555-5555' },
  { checked: false, name: 'Arnold Matlock', email: 'arnold@withinpixels.com', phone: '(555) 555-5555' },
  { checked: false, name: 'Barrera Bradbury', email: 'bbradbury@withinpixels.com', phone: '(555) 555-5555' },
  { checked: false, name: 'Christy Camacho', email: 'ccamacho@withinpixels.com', phone: '(555) 555-5555' },
  { checked: false, name: 'Estes Stevens', email: 'estevens@withinpixels.com', phone: '(555) 555-5555' },
];