import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
} from "react-native";
import { Video } from "expo-av";

const { width, height } = Dimensions.get("window");

export function ShotsScreen({ route }) {
  const { data } = route.params;
  return (
    <View>
      <Video
        source={data.url}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={styles.Video}
      />
      <View style={styles.textView}>
        <View style={{ flew: 1, flexDirection: "row" }}>
          <Image source={require("../Images/Icons/videoicon.png")} />
          <Text style={styles.itemTitle}>{data.name}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Video: {
    width: width - 5,
    height: "100%",
    alignSelf: "center",
  },
  textView: {
    position: "absolute",
    bottom: 1,
    padding: 10,
    width: width - 5,
    height: 50,
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  itemTitle: {
    color: "white",
    fontSize: 18,
    marginLeft: 15,
    fontWeight: "bold",
  },
});
