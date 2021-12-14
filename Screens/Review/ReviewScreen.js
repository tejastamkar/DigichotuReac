import * as React from "react";
import { View, Image, StyleSheet, Dimensions, FlatList } from "react-native";
import HotelReview from "./HotelReview";
import { Users } from "../../Data/UserData";
import { UserReview } from "./UserReview";

const { width, height } = Dimensions.get("window");
export function ReviewScreen({ route }) {
  const { item } = route.params;
  return (
    <FlatList
      style={{ backgroundColor: "#fff" }}
      ListHeaderComponent={
        <>
          <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.url }} />
          </View>
        </>
      }
      ListFooterComponent={
        <>
          <HotelReview item={item} />
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "black",
              marginBottom: 20,
              marginTop: 20,
            }}
          />
          <UserReview data={Users} />
        </>
      }
    />
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
