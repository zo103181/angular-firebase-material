import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Contact } from '../classes/contact.class';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class ContactService {
  private contactsCollection: AngularFirestoreCollection<Contact>;
  private contactDocument: AngularFirestoreDocument<Contact>;
  private contacts: Observable<Contact[]>;

  private user: firebase.User;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((auth) => {
      if (auth != null) {
        this.contactsCollection = afs.collection('users').doc(auth.uid).collection('contacts');
        this.user = auth;
      } else {
        this.contactsCollection = null;
      }
    });
  };

  addContact(contact: Contact) {
    this.contactsCollection.add({
      email: contact["email"],
      phone: contact["phone"],
      name: contact["name"]
    });
  };

  deleteContact(contact: Contact) {
    this.contactDocument = this.contactsCollection.doc(`${contact.id}`);
    this.contactDocument.delete();
  };

  getContacts() {
    return this.afs.collection('users')
      .doc(this.user.uid)
      .collection<Contact[]>('contacts', ref => ref.orderBy('name'))
      .snapshotChanges().map((contacts) => {
        return contacts.map(a => {
          const data = a.payload.doc.data() as Contact;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  };

  updateContact(contact: Contact) {
    this.contactDocument = this.contactsCollection.doc(`${contact.id}`);
    this.contactDocument.update({
      email: contact["email"],
      phone: contact["phone"],
      name: contact["name"]
    });
  };

}
