import * as React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default function ProfileScreen({ navgiation }) {
  return (
    <View styles={{ flex: 1, alignText: "center" }}>
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          alignContent: "center",
          alignSelf: "center",
        }}
      >
        User
      </Text>
      <Image
        style={styles.image}
        source={require("../../Images/Icons/Photo.png")}
      />
      <View style={styles.UserInfo}>
        <Text style={styles.Username}>TestUser</Text>
        <Text style={styles.Userbio}>UserBio</Text>
        <Text style={styles.Points}>Points 300</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: height / 5,
    margin: 10,
    marginLeft: 20,
    marginRight: 20,
    alignSelf: "center",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  UserInfo: {
    margin: 10,
  },
  Username: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 26,
    fontWeight: "bold",
  },
  Userbio: {
    fontSize: 14,
    marginBottom: 5,
  },
  Points: {
    fontSize: 18,
    color: "#933FB6",
    fontWeight: "bold",
  },
});
