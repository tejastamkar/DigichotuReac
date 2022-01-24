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
import { auth } from "../../firebase";
import { signOut } from 'firebase/auth'

const { width, height } = Dimensions.get("window");
export default function ProfileScreen({ navgiation }) {
  const navigation = useNavigation();

  const Logout = () => {
    signOut(auth).then(
      navigation.navigate("login")
    ).catch((e) => {
      alert(e.message)
    })
  }
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
        <Text style={styles.Username}>Ashutosh Nayak</Text>
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
          width: 355,
          height: 60,
          borderRadius: 25,
          alignSelf: "center",
          backgroundColor: "#ded6e8",
          elevation: 15,
        }}
        onPress={() => Logout()}
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
    width: 110,
    height: height / 7.8,
    margin: 11,
    alignSelf: "center",
    borderRadius: 100,
  },
  c1: {
    width: 150,
    height: height / 5.6,
    backgroundColor: "#ded6e8",
    alignSelf: "center",
    marginTop: 20,
    // opacity: 0.37,
    borderRadius: 100,
    elevation: 25,
  },
  c2: {
    width: 125,
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
    marginBottom: 20,
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
    width: 355,
    height: 60,
    borderRadius: 25,
    alignSelf: "center",
    backgroundColor: "#fafafa",
    elevation: 15,
  },
  optimg: {
    position: "absolute",
    marginVertical: 20,
    width: 22,
    height: 21,
    marginLeft: 25,
  },
  opt: {
    top: 20,
    marginLeft: 70,
    fontSize: 20,
    fontWeight: "bold",
  },
});
