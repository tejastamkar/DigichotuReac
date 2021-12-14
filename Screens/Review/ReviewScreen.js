import * as React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import HotelReview from "./HotelReview";
import { ReviewTab } from "./ReviewTab";
import { UserReview } from "./UserReview";
import { Users } from "../../Data/UserData";

const { width, height } = Dimensions.get("window");
export default function ReviewScreen({ route, navigation }) {
  const { item } = route.params;
  return (
    <View>
      <View style={styles.cardView}>
        <Image style={styles.image} source={{ uri: item.url }} />
      </View>
      {/* <ReviewTab data={item} /> */}
      {/* <UserReview data={Users} /> */}
      <HotelReview item={item} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: width - 20,
    height: height / 4,
    backgroundColor: "black",
    margin: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  textView: {
    marginLeft: 20,
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 10,
  },
  image: {
    width: width - 20,
    height: height / 4,
    borderRadius: 10,
  },
});
