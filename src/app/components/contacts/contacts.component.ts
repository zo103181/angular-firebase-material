import { Component, ViewChild, OnInit } from '@angular/core';
import { Input } from '@angular/compiler/src/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SelectionModel } from '@angular/cdk/collections';

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
  selection = new SelectionModel<Contact>(true, []);
  displayedColumns: string[] = ['select', 'name', 'email', 'phone', 'menu'];
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
    this.close();
  }

  deleteValidation(value: boolean) {
    this.validateDelete = value;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  
  modify(contact: Contact) {
    Object.assign(this.contact, contact);
    this.modifyContact = true;
    this.validateDelete = false;
  }

  save(contact: Contact) {
    if (contact["id"] === undefined) {
      this.contactService.addContact(contact);
    } else {
      this.contactService.updateContact(contact);
    } 
    this.modifyContact = false
  }
}