import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export const Homeheader = () => {
  return (
    <View style={styles.head}>
      <Text style={styles.text}>khau Galli</Text>
    </View>
  );
};

export const CameraBtn = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.head}
      onPress={() => navigation.navigate("Camera")}
    >
      <Image
        style={styles.Img}
        source={require("../Images/Icons/Camera.png")}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  head: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 26,
    color: "#000",
    letterSpacing: 1,
  },
  Img: {
    marginHorizontal: 15,
    width: 30.5,
    height: 26.5,
  },
});
