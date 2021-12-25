import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

function ReViewCont() {
  const [text, setText] = useState("");
  const [rate, setRate] = useState(2);
  const [maxRate, setMaxRate] = useState([1, 2, 3, 4, 5]);
  const filled =
    "https://github.com/tranhonghan/images/blob/main/star_filled.png?raw=true";
  // require("../../Images/Icons/ratingImgFilled.png");
  const corner =
    "https://github.com/tranhonghan/images/blob/main/star_corner.png?raw=true";
  // require("../../Images/Icons/ratingImgCorner.png");

  const submitaction = () => {
    alert("Your Review \n" + rate + "\n" + text);
  };

  const CustomRatingBar = () => {
    return (
      <View style={styles.StarView}>
        {maxRate.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setRate(item)}
            >
              <Image
                style={styles.StarImg}
                source={item <= rate ? { uri: filled } : { uri: corner }}
                // source={corner}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Review</Text>
      </View>
      <CustomRatingBar />
      <Text
        style={{
          fontSize: 20,
          alignSelf: "center",
          marginBottom: 5,
          marginTop: 5,
        }}
      >
        {rate + "/" + maxRate.length}
      </Text>
      <>
        <TextInput
          style={styles.input}
          value={text}
          multiline={true}
          maxLength={400}
          onChangeText={(text) => setText(text)}
          placeholder="description  (Max 400 words)"
        />
      </>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => submitaction()}
      >
        <Text style={styles.panelButtonTitle}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(0)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}
export const Popcont = () => <ReViewCont />;
export const headerPil = () => (
  <View style={styles.header}>
    <View style={styles.panelHeader}>
      <View style={styles.panelHandle} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  panel: {
    padding: 20,
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  header: {
    backgroundColor: "#ffffff",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#933FB6",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 10,
  },
  StarView: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
  },
  StarImg: {
    width: 35,
    height: 35,
    resizeMode: "cover",
  },
});
