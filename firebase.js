import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA8jEyBubhnxClgNQTh-c_O_9Zooc8LrAo",
    authDomain: "mesej-96c9b.firebaseapp.com",
    projectId: "mesej-96c9b",
    storageBucket: "mesej-96c9b.appspot.com",
    messagingSenderId: "429779634374",
    appId: "1:429779634374:web:674cc53eb5ee7c248dafc7"
  };

const app = !firebase.apps.length 
? firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvide();

export {db, auth, provider};