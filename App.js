import * as React from "react";
import { View } from "react-native";
import MainContainer from "./NavBar/MainContainer";
import { db } from "./firebase";
export default function App() {
  var data = [];
  db.collection("Hotel")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
        //TODO ADD user name in doc.name every time user is created.
      });
    });
  console.log(data);
  return <MainContainer data={data} />;
}
