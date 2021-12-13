import * as React from "react";
import { View, Text } from "react-native";

export default function ReelScreen({ navgiation }) {
  return (
    <View styles={{ flex: 1 }}>
      <Text
        onPress={() => navgiation.navgiate("Home")}
        style={{ fontSize: 26, fontWeight: "bold", alignSelf: "center" }}
      >
        Reels
      </Text>
    </View>
  );
}
