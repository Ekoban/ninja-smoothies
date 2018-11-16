import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
 
var config = {
    apiKey: "AIzaSyAz9iu5O0I-U4olONVEkr3rMKGONbXmSdM",
    authDomain: "udemy-ninja-smoothies-16734.firebaseapp.com",
    databaseURL: "https://udemy-ninja-smoothies-16734.firebaseio.com",
    projectId: "udemy-ninja-smoothies-16734",
    storageBucket: "udemy-ninja-smoothies-16734.appspot.com",
    messagingSenderId: "566693946911"
  };
  const firebaseApp = firebase.initializeApp(config);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })

  //Export firestore database
  export default firebaseApp.firestore()