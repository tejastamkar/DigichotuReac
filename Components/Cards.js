import React from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const { width, heigth } = Dimensions.get("window");
const numcol = 2;
const CardItems = ({ item }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image
        style={styles.cardImage}
        source={{
          uri: item.url,
        }}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>item.description</Text>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ data }) => {
  if (data && data.length) {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <CardItems item={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  } else {
    console.log("no data");
    return null;
  }
};

const styles = StyleSheet.create({
  con: {
    width: "100%",
    height: "85%",
    padding: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    // height: width / numcol,
  },
  card: {
    backgroundColor: "#fff",
    width: "45%",
    // height: "50%",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  cardImage: {
    width: "100%",
    height: 250,
    borderRadius: 17,
    resizeMode: "cover",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 0.5, height: 0.5 },
  },
  textView: {
    position: "absolute",
    bottom: 10,
    margin: 10,
    left: 5,
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
