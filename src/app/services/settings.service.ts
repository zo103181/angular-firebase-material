import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Settings } from '../classes/settings.class';
import { Observable } from 'rxjs/Observable';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class SettingsService {
  private settingsDocument: AngularFirestoreDocument<Settings>;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((auth) => {
      if (auth != null) {
        this.settingsDocument = afs.collection('users').doc(auth.uid);
      } else {
        this.settingsDocument = null;
      }
    });
  };

  getSettings() {
    return this.settingsDocument.valueChanges();
  }

  updateSettings(setting: Settings) {
    var address = setting["address"];
    this.settingsDocument.update({
      firstname: setting["firstname"],
      lastname: setting["lastname"],
      email: setting["email"],
      address: {
        street: address["street"],
        city: address["city"],
        state: address["state"],
        zip: address["zip"]
      }
    });
  };

}
