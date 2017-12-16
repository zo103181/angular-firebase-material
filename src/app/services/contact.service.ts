import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Contact } from '../classes/contact.class';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {
  private contactsCollection: AngularFirestoreCollection<Contact>;
  private contactDocument: AngularFirestoreDocument<Contact>;
  private contacts: Observable<Contact[]>;

  constructor(public afs: AngularFirestore) {
    this.contactsCollection = afs.collection('contacts');
  };

  addContact(contact: Contact) {
    this.contactsCollection.add({
      email: contact["email"],
      phone: contact["phone"],
      name: contact["name"]
    });
  };

  deleteContact(contact: Contact) {
    this.contactDocument = this.afs.doc(`contacts/${contact.id}`);
    this.contactDocument.delete();
  };

  getContacts() {
    return this.afs.collection<Contact[]>('contacts', ref => ref.orderBy('name')).snapshotChanges().map((contacts) => {
      return contacts.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return Object.assign({ 'id': id }, data);
      });
    });
  };

  updateContact(contact: Contact) {
    this.contactDocument = this.afs.doc(`contacts/${contact.id}`);
    this.contactDocument.update({
      email: contact["email"],
      phone: contact["phone"],
      name: contact["name"]
    });
  };

}
