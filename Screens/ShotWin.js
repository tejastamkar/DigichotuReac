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
    // <FlatList
    //   style={{ backgroundColor: "#fff" }}
    //   ListHeaderComponent={
    //     <View>
    //       <Video
    //         source={data.url}
    //         rate={1.0}
    //         volume={1.0}
    //         isMuted={true}
    //         resizeMode="cover"
    //         shouldPlay
    //         isLooping
    //         style={styles.Video}
    //       />
    //     </View>
    //   }
    //   //   ListFooterComponent={<Text>This is Shot </Text>}
    // />
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
    </View>
  );
}

const styles = StyleSheet.create({
  Video: {
    width: width - 5,
    height: height - 70,
    alignSelf: "center",
  },
});
