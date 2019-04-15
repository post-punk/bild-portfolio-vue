import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAk0Ej4wUa2zcMXX3YCbTRwcrI7_DQZcPA",
    authDomain: "bild-portfolio-vue.firebaseapp.com",
    databaseURL: "https://bild-portfolio-vue.firebaseio.com",
    projectId: "bild-portfolio-vue",
    storageBucket: "bild-portfolio-vue.appspot.com",
    messagingSenderId: "310806002713"
  };
const firebaseApp =  firebase.initializeApp(config);

//export firestore database
export default firebaseApp.firestore()