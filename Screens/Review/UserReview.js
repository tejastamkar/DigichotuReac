import * as React from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
} from "react-native";

const { width, heigth } = Dimensions.get("window");

const UserList = ({ item }) => {
  return (
    <View style={styles.cards}>
      <Image
        style={styles.circle}
        source={require("../../Images/Images/Photo.png")}
      />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.reviewtxt}>{item.review}</Text>
    </View>
  );
};

export const UserReview = ({ data }) => {
  return (
    <>
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
    marginTop: 20,
    position: "absolute",
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
    height: 90,
    backgroundColor: "#FEFEFE",
    elevation: 3,
  },
  name: {
    fontSize: 18,
    marginLeft: 100,
    paddingRight: 10,
  },
  reviewtxt: { fontSize: 18, marginLeft: 105, marginRight: 20 },
});
