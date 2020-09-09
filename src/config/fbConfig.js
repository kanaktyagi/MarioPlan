import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
 
const firebaseConfig = {
    apiKey: "AIzaSyAMQXj-o5zpZyyGfjULRHaCfv_U8aOBftA",
    authDomain: "net-ninja-marioplan-65e43.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-65e43.firebaseio.com",
    projectId: "net-ninja-marioplan-65e43",
    storageBucket: "net-ninja-marioplan-65e43.appspot.com",
    messagingSenderId: "782659560802",
    appId: "1:782659560802:web:cec723839013e9c329383b",
    measurementId: "G-044PR33J70"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true});

  export default firebase