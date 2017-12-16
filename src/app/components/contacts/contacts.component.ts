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
export class ContactsComponent implements AfterViewInit, OnInit {
  dataSource = new MatTableDataSource<Contact>();
  displayedColumns = ['checked', 'name', 'menu'];
  modifyContact = false;
  validateDelete = false;
  contact: Contact;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contact = {
      name: '',
      email: '',
      phone: ''
    }
  }

  ngAfterViewInit() {
    this.contactService.getContacts().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  add() {
    this.contact = {
      name: '',
      email: '',
      phone: ''
    };
    this.modifyContact = !this.modifyContact;
  }

  close() {
    this.modifyContact = !this.modifyContact;
  };

  delete(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.modifyContact = !this.modifyContact;
  }

  deleteValidation(value: boolean) {
    this.validateDelete = value;
  }

  modify(contact: Contact) {
    Object.assign(this.contact, contact);
    this.modifyContact = !this.modifyContact;
  }

  save(contact: Contact) {
    (contact["id"] === undefined) ? this.contactService.addContact(contact) : this.contactService.updateContact(contact);
    this.modifyContact = !this.modifyContact;
  }
}