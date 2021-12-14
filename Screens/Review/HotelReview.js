import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function HotelReview({ item, data }) {
  return (
    <View>
      <Text style={styles.header}>Hotel Review</Text>
      <Text style={styles.textView}>Name: {item.name}</Text>
      <Text style={styles.textView}>
        Address: <Text style={styles.textAddres}>{item.address}</Text>
      </Text>
      <Text style={styles.textView}>Avg Rating: {item.rate}/5</Text>
      <Text style={styles.textView}>Costing: {item.cost}</Text>
      <Text style={styles.textView}>Type: {item.type}</Text>
      <Text style={styles.textView}>Food Type: {item.food}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: "#933FB6",
    marginLeft: 20,
  },
  textView: {
    marginLeft: 50,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 25,
  },
  textAddres: {
    fontSize: 16,
    marginLeft: 20,
    marginRight: 20,
  },
});
