import * as React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
export default function HotelReview({ item }) {
  return (
    <View>
      <Text style={styles.header}>{item.Name}</Text>
      <Text style={styles.textType}>{item.type}</Text>
      <Text style={styles.textAddres}>{item.address}</Text>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "black",
          marginLeft: 20,
          marginRight: 20,
          borderStyle: "dotted",
          borderWidth: 1,
          borderRadius: 1,
          marginTop: 20,
        }}
      />

      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
            marginLeft: 35,
            marginRight: 50,
          }}
        >
          <Text style={styles.textHint}>Ratings:</Text>
          <Text style={styles.textView}>
            <Image
              source={require("../../Images/Icons/ratingStar.png")}
              style={{ width: 18, height: 18, marginTop: 10 }}
            />
            {item.rate}.4
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
            marginLeft: 35,
            marginRight: 50,
          }}
        >
          <Text style={styles.textHint}>Costing:</Text>
          <Text style={styles.textView}>{item.cost}</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignSelf: "center",
            marginLeft: 35,
            marginRight: 50,
          }}
        >
          <Text style={styles.textHint}>Type:</Text>
          <Text style={styles.textView}>{item.food}</Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "black",
          marginLeft: 20,
          marginRight: 20,
          borderStyle: "dotted",
          borderWidth: 1,
          borderRadius: 1,
          marginTop: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 35,
    marginTop: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  textHint: {
    // marginLeft: 35,
    // marginRight: 50,
    fontSize: 16,
    opacity: 0.7,
    marginTop: 20,
  },
  textView: {
    // marginLeft: 35,
    // marginRight: 60,
    fontSize: 25,
    fontWeight: "800",
    marginTop: 3,
  },
  textAddres: {
    fontSize: 16,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 20,
  },
  textType: {
    fontSize: 20,
    marginTop: 5,
    marginLeft: 30,
  },
});
