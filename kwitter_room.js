var firebaseConfig = {
    apiKey: "AIzaSyCUbNnNJBoyZYVxbWeq4Qld3pDkI81DQlU",
    authDomain: "kwitter-c5c9b.firebaseapp.com",
    databaseURL: "https://kwitter-c5c9b-default-rtdb.firebaseio.com",
    projectId: "kwitter-c5c9b",
    storageBucket: "kwitter-c5c9b.appspot.com",
    messagingSenderId: "366547473660",
    appId: "1:366547473660:web:8a3606407eb2840d0d7379"
  };
function add_user() {
    username=document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding_user"
    });
}