import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyBUquJN2bfkhdyzed9YWhT3x5oI_XkC6U8",
    authDomain: "masterpiece-clothes-db.firebaseapp.com",
    projectId: "masterpiece-clothes-db",
    storageBucket: "masterpiece-clothes-db.appspot.com",
    messagingSenderId: "897201623303",
    appId: "1:897201623303:web:930ba0bb787fc3496175a2",
    measurementId: "G-Q6DY7QX14P"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;