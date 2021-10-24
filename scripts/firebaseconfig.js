(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    const FirebaseConfig = {
        apiKey: "AIzaSyAvOug0SC5vWJMxrah_sH83qBY1HfZMf1A",
        authDomain: "coffeerun-152e6.firebaseapp.com",
        projectId: "coffeerun-152e6",
        storageBucket: "coffeerun-152e6.appspot.com",
        messagingSenderId: "958692992810",
        appId: "1:958692992810:web:4434f586877a67fcc5e053",
        measurementId: "G-W96ZCJES5C"
      };

    App.FirebaseConfig = FirebaseConfig;
    firebase.initializeApp(App.FirebaseConfig);
    window.App = App;

})(window);