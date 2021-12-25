import * as React from "react";
import { View, Text, Button } from "react-native";

export default function NotiflyScreen({ navgiation }) {
  const [stext, setText] = React.useState(0);

  const changeText = () => {
    if (stext == "this is notifications") {
      setText("this is empty ");
    } else {
      setText("this is notifications");
    }
  };
  return (
    <View styles={{ flex: 1 }}>
      <Text
        // onPress={() => navgiation.navgiate("Home")}
        style={{ fontSize: 26, fontWeight: "bold", alignSelf: "center" }}
      >
        {stext}
      </Text>
      <Button title="Change Text" onPress={() => setText(stext + 1)} />
    </View>
  );
}
