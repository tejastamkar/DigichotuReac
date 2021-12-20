// // Import the functions you need from the SDKs you need
import * as Firebase from "firebase";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-JvJBWay5kd1n37M-QDN9auNERM6kq84",
  authDomain: "test-5320e.firebaseapp.com",
  projectId: "test-5320e",
  storageBucket: "test-5320e.appspot.com",
  messagingSenderId: "237350316327",
  appId: "1:237350316327:web:5dd892a471c5ef1324e102",
  measurementId: "G-43ZWXVDQ8Z",
};

// // Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);
export const db = Firebase.firestore();
export const auth = Firebase.auth();

var data = [];
export function getCard() {
  // console.log("in the function");
  // var snapshot = await firebase.firestore().collection("Hotel").get();

  // snapshot.forEach((doc) => {
  //   data.push(doc.data());
  // });
  // // console.log(data);
  // return data;
  db.collection("Hotel")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
        //TODO ADD user name in doc.name every time user is created.
      });
    });
  // console.log(data);
  return data;
}
