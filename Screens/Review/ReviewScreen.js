import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import HotelReview from "./HotelReview";
import { Users } from "../../Data/UserData";
import { UserReview } from "./UserReview";
import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { Popcont, headerPil } from "./AddReviewScreen";

const { width, height } = Dimensions.get("window");
export function ReviewScreen({ route }) {
  const { item } = route.params;
  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <>
      <BottomSheet
        ref={bs}
        snapPoints={[0, 350, 800]}
        initialSnap={0}
        renderContent={Popcont}
        // ListFooterComponent={Popcont}
        renderHeader={headerPil}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
          backgroundColor: "black",
        }}
      >
        <FlatList
          style={{ backgroundColor: "#fff", height: "100%" }}
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
                  width: "100%",
                  height: 1,
                  backgroundColor: "black",
                  marginBottom: 20,
                  marginTop: 20,
                }}
              />
              <View style={styles.RowView}>
                <Text style={styles.header}>UserReview</Text>
                <TouchableOpacity
                  onPress={() => bs.current.snapTo(1)}
                  style={styles.ReviewBtn}
                >
                  <Text
                    style={{
                      color: "#fff",
                      alignSelf: "center",
                      top: 7,
                    }}
                  >
                    Review
                  </Text>
                </TouchableOpacity>
              </View>

              <UserReview data={Users} />
            </>
          }
        />
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: width - 20,
    height: height / 4,
    backgroundColor: "white",
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
  header: {
    fontSize: 26,
    color: "#933FB6",
    marginLeft: 20,
  },
  RowView: {
    flex: 1,
    flexDirection: "row",
  },
  ReviewBtn: {
    width: 70,
    height: 30,
    borderRadius: 5,
    backgroundColor: "#933FB6",
    marginLeft: width - 230,
  },
});
