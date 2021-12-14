import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, heigth } = Dimensions.get("window");
const numcol = 2;
const CardItems = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Review", { item })}
    >
      <Image
        style={styles.cardImage}
        source={{
          uri: item.url,
        }}
      />
      <View style={styles.textView}>
        {/* <Image source={{ uri: require("../Images/Icons/bgblur.png") }} />r */}
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemRate}>Rating: {item.rate}/5</Text>
        <Text style={styles.itemDescription}>{item.address}</Text>
        {/* <Button title="Press me" onPress={pressHandler} /> */}
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
        numColumns={numcol}
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
    margin: 5,
    flexDirection: "row",
    alignContent: "stretch",
  },
  card: {
    width: "48%",
    margin: 5,
    shadowColor: "#000",
    shadowOpacity: 10,
    shadowOffset: { width: 0.8, height: 0.3 },
    elevation: 5,
  },
  cardImage: {
    width: "100%",
    height: 250,
    borderRadius: 17,
    resizeMode: "cover",
    shadowOpacity: 1,
    shadowOffset: { width: 0.5, height: 0.5 },
  },
  textView: {
    position: "absolute",
    bottom: 1,
    marginTop: 14,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
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
  itemRate: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
});
