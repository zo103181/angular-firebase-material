import { Component, ViewChild, OnInit } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

import { MatMenu } from '@angular/material/menu/typings/menu-directive';
import { MatProgressBarModule } from '@angular/material/progress-bar';
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
  displayedColumns: string[] = ['checked', 'name', 'menu'];
  modifyContact: boolean = false;
  isLoading: boolean = true;
  validateDelete: boolean = false;
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
      this.isLoading = false;
    });
  }

  add() {
    this.contact = {
      name: '',
      email: '',
      phone: ''
    };
    this.validateDelete = false;
    this.modifyContact = !this.modifyContact;
  }

  close() {
    this.modifyContact = false;
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
    this.validateDelete = false;
    this.modifyContact = !this.modifyContact;
  }

  save(contact: Contact) {
    (contact["id"] === undefined) ? this.contactService.addContact(contact) : this.contactService.updateContact(contact);
    this.modifyContact = !this.modifyContact;
  }
}