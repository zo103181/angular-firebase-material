import { Injectable } from '@angular/core';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { User } from '../classes/user.class';

@Injectable()
export class AuthenticationService {
  private user: Observable<firebase.User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {
    this.user = afAuth.authState.switchMap(user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
      } else {
        return Observable.of(null)
      }
    });
  }

  authUser() {
    return this.user;
  }

  login(user: User) {
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then((credential) => {
      this.updateUserData(credential);
    });
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  signup(user: User) {
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then((credential) => {
      this.updateUserData(credential);
    });
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email
    }
    return userRef.set(data)
  }
}
