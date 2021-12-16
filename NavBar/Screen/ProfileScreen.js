import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");
export default function ProfileScreen({ navgiation }) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.c1}>
        <View style={styles.c2}>
          <Image
            style={styles.image}
            source={require("../../Images/Images/Userpic.png")}
          />
        </View>
      </View>
      <View style={styles.UserInfo}>
        <Text style={styles.Username}>TestUser</Text>
        <Text style={styles.mail}>test.user@abc.com</Text>
        <Text style={styles.phnum}>1234567890</Text>
        {/* <Button>"Go back Home"</Button> */}
      </View>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.optimg}
          source={require("../../Images/Icons/editprofile.png")}
        />
        <Text style={styles.opt}>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
        <Image
          style={styles.optimg}
          source={require("../../Images/Icons/settings.png")}
        />
        <Text style={styles.opt}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 15,
          width: 375,
          height: 80,
          borderRadius: 25,
          alignSelf: "center",
          backgroundColor: "#ded6e8",
          elevation: 15,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <Image
          style={styles.optimg}
          source={require("../../Images/Icons/logout.png")}
        />
        <Text style={styles.opt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 115,
    height: height / 7.8,
    margin: 11,
    alignSelf: "center",
    borderRadius: 100,
  },
  c1: {
    width: 155,
    height: height / 5.6,
    backgroundColor: "#ded6e8",
    alignSelf: "center",
    marginTop: 20,
    // opacity: 0.37,
    borderRadius: 100,
    elevation: 25,
  },
  c2: {
    width: 130,
    height: height / 6.5,
    backgroundColor: "#8464aa",
    alignSelf: "center",
    margin: 10,
    borderRadius: 100,
    // elevation: 25,
  },
  UserInfo: {
    marginTop: 15,
    width: 250,
    height: 100,
    borderRadius: 17,
    alignSelf: "center",
    backgroundColor: "#ded6e8",
    elevation: 24,
    marginBottom: 25,
  },
  Username: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 26,
    alignSelf: "center",
    fontWeight: "bold",
  },
  mail: {
    alignSelf: "center",
    fontSize: 18,
    marginBottom: 5,
  },
  phnum: {
    alignSelf: "center",
    fontSize: 18,
    color: "#933FB6",
    fontWeight: "bold",
  },
  card: {
    marginTop: 15,
    width: 375,
    height: 80,
    borderRadius: 25,
    alignSelf: "center",
    backgroundColor: "#fafafa",
    elevation: 15,
  },
  optimg: {
    position: "absolute",
    marginVertical: 23,
    width: 30,
    height: 30,
    marginLeft: 25,
  },
  opt: {
    top: 27,
    marginLeft: 80,
    fontSize: 20,
    fontWeight: "bold",
  },
});
