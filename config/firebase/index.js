import firebase from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyDPaC-6PIQvA6dN7m68W_9SbrUfKw-_vl8",
  authDomain: "clocker-codarme.firebaseapp.com",
  projectId: "clocker-codarme",
  storageBucket: "clocker-codarme.appspot.com",
  messagingSenderId: "451877531814",
  appId: "1:451877531814:web:2f88f7b4a5308cbbc60467",
  measurementId: "G-PEZHDEGL00"
}


export default firebase.apps.length
  ? firebase.app()
  : firebase.initializeApp(firebaseConfig)

