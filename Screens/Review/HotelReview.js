import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Users } from "../../Data/UserData";
export default function HotelReview({ item }) {
  const nav = useNavigation();
  return (
    <View>
      <Text style={styles.textView}>Name: {item.name}</Text>
      <Text style={styles.textView}>
        Address:{" "}
        <Text
          style={{
            fontSize: 18,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          {item.address}
        </Text>
      </Text>
      <Text style={styles.textView}>Avg Rating: {item.rate}/5</Text>
      <Text style={styles.textView}>Costing: {item.cost}</Text>
      <Text style={styles.textView}>Type: {item.type}</Text>
      <Text style={styles.textView}>Food Type: {item.food}</Text>
      {/* <Button
        title="User Review"
        onPress={nav.navigate("UserReview", { Users })}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    marginLeft: 20,
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 40,
  },
});
