import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth'

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyC193fHc07CMNEcUSQaueRvNFKRwPXgPJo",
  authDomain: "centrodedatos-9bb6d.firebaseapp.com",
  projectId: "centrodedatos-9bb6d",
  storageBucket: "centrodedatos-9bb6d.appspot.com",
  messagingSenderId: "380913369928",
  appId: "1:380913369928:web:0296760627aef10d77e97d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const database = firebase.firestore();
const firestore = firebase.firestore();
firebase.firestore().enablePersistence({synchronizeTabs:true})
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully


export {
  database as database,
  firebase as firebase,
  firestore as firestore
}