//This is specific to my firebase database, you'll need to put in your own information
var firebaseConfig = {
  apiKey: "AIzaSyDzjuMb2Ql-mwSJmoyoeXKLrTQygY7VszI",
  authDomain: "webdev-bdd0d.firebaseapp.com",
  databaseURL: "https://webdev-bdd0d.firebaseio.com",
  projectId: "webdev-bdd0d",
  storageBucket: "webdev-bdd0d.appspot.com",
  messagingSenderId: "411299051419",
  appId: "1:411299051419:web:5184103630fb534e61133e",
  measurementId: "G-6X9MLZPQGZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Prep the database object
var database = firebase.database();

//Gets information from the page and sends it to the database
document.getElementById("submit").addEventListener("click", function() {
  var message = document.getElementById("m").value;
  writeUserData(message);
});

//Writes information to the database
function writeUserData(m) {
  database.ref('messages/').push({
    message: m
  });
}