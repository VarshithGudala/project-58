import firebase from 'firebase';

    //paste your SDK here
  const firebaseConfig = {
    apiKey: "AIzaSyDZSmZCLTOl90_3oNt8xWPcPpTs6IZ4qLY",
    authDomain: "voter-d2fa8.firebaseapp.com",
    databaseURL:"https://voter-d2fa8-default-rtdb.firebaseio.com/",
    projectId: "voter-d2fa8",
    storageBucket: "voter-d2fa8.appspot.com",
    messagingSenderId: "655732251361",
    appId: "1:655732251361:web:904288260b25c1d41af5a0"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();