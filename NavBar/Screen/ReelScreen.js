import * as React from "react";
import { View, Text, Button } from "react-native";

export default function ReelScreen({ navigation }) {
  return (
    <View styles={{ flex: 1 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", alignSelf: "center" }}>
        Reels
      </Text>
    </View>
  );
}
