import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Contact } from '../classes/contact.class';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {
  contactsCollection: AngularFirestoreCollection<Contact>;
  contacts: Observable<Contact[]>;

  constructor(public afs: AngularFirestore) {
    this.contactsCollection = afs.collection('contacts');
  }

  getContacts() {
    return this.afs.collection<Contact[]>('contacts').snapshotChanges().map((contacts) => {
      return contacts.map(a => {
        const data = a.payload.doc.data() as Contact;
        const id = a.payload.doc.id;
        return data;
      });
    });
  }

}
