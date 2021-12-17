import * as React from "react";
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Video } from "expo-av";
import { reels } from "../../Data/reels";

const { width, heigth } = Dimensions.get("window");
const numcol = 2;
const Reels = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View styles={{ flex: 1 }}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("shot", { data })}
      >
        <Video
          source={data.url}
          rate={1.0}
          volume={1.0}
          isMuted={true}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.cardImage}
        />
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>{data.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const ReelCard = ({ data }) => {
  if (data && data.length) {
    return (
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return <Reels data={item} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={numcol}
      />
    );
  } else {
    console.log("no data");
    return null;
  }
};

export default function ReelScreen({ navigation }) {
  return (
    <View styles={{ flex: 1 }}>
      <ReelCard data={reels} />
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    width: "100%",
    margin: 5,
    flexDirection: "row",
    alignContent: "stretch",
  },
  card: {
    width: "50%",
    margin: 5,
    shadowColor: "#000",
    shadowOpacity: 10,
    shadowOffset: { width: 0.8, height: 0.3 },
    elevation: 5,
  },
  cardImage: {
    width: 190,
    height: 300,
    borderRadius: 17,
    resizeMode: "cover",
    shadowOpacity: 1,
    shadowOffset: { width: 0.5, height: 0.5 },
  },
  textView: {
    position: "absolute",
    bottom: 1,
    marginTop: 14,
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
    padding: 10,
    width: 190,
    height: 70,
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
});
