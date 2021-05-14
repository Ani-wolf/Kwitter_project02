  var firebaseConfig = {
    apiKey: "AIzaSyDdYrOv1XFHgd7tOzLL6IhFVemkWU7uVB0",
    authDomain: "kwitterhomework.firebaseapp.com",
    databaseURL: "https://kwitterhomework-default-rtdb.firebaseio.com",
    projectId: "kwitterhomework",
    storageBucket: "kwitterhomework.appspot.com",
    messagingSenderId: "154722441008",
    appId: "1:154722441008:web:d5072e177a6035b9c51af5"
  };
function add_user() {
    username=document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({
        purpose:"adding_user"
    });
}
