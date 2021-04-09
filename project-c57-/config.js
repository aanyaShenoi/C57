import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFvc5kJ6THFVR_dS_lVin-_X2h4EclvK4",
  authDomain: "newsletter-96175.firebaseapp.com",
  databaseURL: "https://newsletter-96175-default-rtdb.firebaseio.com",
  projectId: "newsletter-96175",
  storageBucket: "newsletter-96175.appspot.com",
  messagingSenderId: "143507007476",
  appId: "1:143507007476:web:d8e3a2296d88d7ee5cbba1"
};
// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
