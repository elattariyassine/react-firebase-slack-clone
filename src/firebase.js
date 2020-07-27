import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyABizyb-XQvxfX_1GZc-WrWxSf7hxFc6cE",
    authDomain: "slack-clone-react-js.firebaseapp.com",
    databaseURL: "https://slack-clone-react-js.firebaseio.com",
    projectId: "slack-clone-react-js",
    storageBucket: "slack-clone-react-js.appspot.com",
    messagingSenderId: "888309445614",
    appId: "1:888309445614:web:440dd3c31e51d030c1d4ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;