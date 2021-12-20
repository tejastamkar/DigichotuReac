// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-JvJBWay5kd1n37M-QDN9auNERM6kq84",
  authDomain: "test-5320e.firebaseapp.com",
  projectId: "test-5320e",
  storageBucket: "test-5320e.appspot.com",
  messagingSenderId: "237350316327",
  appId: "1:237350316327:web:5dd892a471c5ef1324e102",
  measurementId: "G-43ZWXVDQ8Z",
};

// Initialize Firebase
let app;
if (firebase.app.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

// const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = firebase.auth();
