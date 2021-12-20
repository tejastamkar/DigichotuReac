import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Camera } from "expo-camera";
import * as Permission from "expo-permissions";
import * as MediaLibrary from "expo-media-library";

const { width, height } = Dimensions.get("window");
export function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [camera, setcamera] = useState(null);
  const [image, setimage] = useState(null);
  const takepic = async () => {
    // const option = { qualitu: 0.5, base64: true, skipProcessing: false };

    const data = await camera.takePictureAsync();
    console.log("working");
    if (camera) {
      setimage(data.url);
      console.log(data.url);
      //   handlesave(data.url);
    }
  };
  const handlesave = async (photo) => {
    const { status } = await Permission.askAsync(Permission.CAMERA);
    if (status === "granted") {
      const assert = await MediaLibrary.createAlbumAsync(photo);
      await MediaLibrary.createAlbumAsync("khaugalli", assert);
      console.log("its working");
    } else {
      console.log(" Oh u missed the permission");
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera
        ref={(ref) => setcamera(ref)}
        style={styles.camera}
        type={type}
        ratio={"4:3"}
      >
        <View>
          <TouchableOpacity style={styles.button1} onPress={() => takepic()}>
            <Text style={styles.text}> Click </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
          {image && <Image source={{ uri: image }} style={{ flex: 1 }} />}
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "#000",
    height: height,
  },
  camera: {
    width: width - 10,
    alignSelf: "center",
    height: height - 120,
  },
  button: { width: 100, height: 100, alignSelf: "center" },
  button1: { width: 100, height: 100, top: height - 200, alignSelf: "center" },
  text: { fontSize: 35 },
});
