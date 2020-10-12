import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDpNyU_prKHrGNo0QUK9gU0C4GtKDtnC4E",
    authDomain: "react-todo-a90c7.firebaseapp.com",
    databaseURL: "https://react-todo-a90c7.firebaseio.com",
    projectId: "react-todo-a90c7",
    storageBucket: "react-todo-a90c7.aeppspot.com",
    messagingSenderId: "954906611333",
    appId: "1:954906611333:web:c73fdd16de7c06596123ec"
  };

  var fire = firebase.initializeApp(firebaseConfig)
  export default fire;