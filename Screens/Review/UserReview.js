import * as React from "react";
import { render } from "react-dom";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from "react-native";

const { width, heigth } = Dimensions.get("window");
let imageurl = {
  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPjkW6L6Fi2RYRQtGGPZeDA_Qt0qADmENA6A&usqp=CAUS",
};
const UserList = ({ item }) => {
  return (
    <View style={styles.cards}>
      <View style={styles.circle}>
        <Image style={styles.cardImage} source={imageurl} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.reviewtxt}>{item.review}</Text>
    </View>
  );
};

export const UserReview = ({ data }) => {
  return (
    <>
      <Text style={styles.header}>UserReview</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <UserList item={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: "#933FB6",
    marginLeft: 20,
  },
  circle: {
    height: 50,
    width: 50,
    backgroundColor: "#000",
    borderRadius: 30,
    marginLeft: 20,
  },
  image: {
    width: "100%",
    position: "absolute",
  },
  cards: {
    borderRadius: 25,
    margin: 5,
    paddingTop: 15,
    alignSelf: "center",
    width: width - 20,
    // paddingVertical: 25,
    height: 120,
    backgroundColor: "#FEFEFE",
    elevation: 3,
  },
  name: {
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
    paddingRight: 10,
  },
  reviewtxt: { fontSize: 18, marginLeft: 30, marginRight: 20 },
});
