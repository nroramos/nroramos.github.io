// db.js
import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyA0RnG8s42VR6c042iFTy3Lh7tUIAxzb0E",
    authDomain: "profedexfb.firebaseapp.com",
    databaseURL: "https://profedexfb.firebaseio.com",
    projectId: "profedexfb",
    storageBucket: "profedexfb.appspot.com",
    messagingSenderId: "1099128991147"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()