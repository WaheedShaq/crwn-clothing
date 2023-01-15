import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyD4aK62Mm7VT4q5516BlQJx2Rc1vEF2vlg',
  authDomain: 'crwn-db-c793a.firebaseapp.com',
  projectId: 'crwn-db-c793a',
  storageBucket: 'crwn-db-c793a.appspot.com',
  messagingSenderId: '174581996086',
  appId: '1:174581996086:web:a42c579bcd9e9222229697',
  measurementId: 'G-5X3F7CVJ7Y',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
