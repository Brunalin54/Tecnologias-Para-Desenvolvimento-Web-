import firebase from 'firebase/app'; 
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyApupLx60Phr-ChFyQ10E8zTQRB2CztqvQ",
  authDomain: "puc---t-d-web.firebaseapp.com",
  projectId: "puc---t-d-web",
  storageBucket: "puc---t-d-web.appspot.com",
  messagingSenderId: "195126140496",
  appId: "1:195126140496:web:4ed15eba184afa821e3b55"
};

if(!firebase.apps.lenght)
{
    firebase.initializeApp(firebaseConfig);
}

export default firebase;