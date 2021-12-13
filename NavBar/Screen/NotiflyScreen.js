import * as React from "react";
import { View, Text } from "react-native";

export default function NotiflyScreen({ navgiation }) {
  return (
    <View styles={{ flex: 1}}>
      <Text
        onPress={() => navgiation.navgiate("Home")}
        style={{ fontSize: 26, fontWeight: "bold", alignSelf: "center"  }}
      >
        You will see all the Notiflcation here
      </Text>
    </View>
  );
}
