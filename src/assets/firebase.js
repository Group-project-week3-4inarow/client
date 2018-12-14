import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyBEMslxLIUhVUGcUUQUQYyr7zqccCMqRlg",
    authDomain: "inarow-ab67e.firebaseapp.com",
    databaseURL: "https://inarow-ab67e.firebaseio.com",
    projectId: "inarow-ab67e",
    storageBucket: "inarow-ab67e.appspot.com",
    messagingSenderId: "984917154303"
};

firebase.initializeApp(config);
var db = firebase.database();

export default db
