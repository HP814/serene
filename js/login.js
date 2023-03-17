// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getAnalytics} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
import { getAuth,
    signInWithEmailAndPassword,} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyB8pdAb6SGtogsY0gCmrMHm2NXq0gz91oE",

    authDomain: "serene-2bf35.firebaseapp.com",

    projectId: "serene-2bf35",

    storageBucket: "serene-2bf35.appspot.com",

    messagingSenderId: "221214900181",

    appId: "1:221214900181:web:b00beda8eb83732b55c75c"

  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();


var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      alert("logined Successfully")
      var aaaa =  (success.user.uid);
      localStorage.setItem("uid",aaaa)
      console.log(aaaa)
      
      
      
      window.location.replace('home.html')
     
      
    })
    .catch(function (err) {
      alert("login error"+err);
    });

  console.log(obj);
}