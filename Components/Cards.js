import React from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";

export const Card = ({ item }) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Image style={styles.cardImage} source={{ uri: item.url }} />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}> {item.title}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "2%",
    width: "96%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: { width: 3, height: 3 },
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
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
