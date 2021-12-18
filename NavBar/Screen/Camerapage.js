import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Camera } from "expo-camera";

const { width, height } = Dimensions.get("window");
export function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  const cam = useRef();
  const _takepic = async () => {
    const option = { qualitu: 0.5, base64: true, skipProcessing: false };
    let pic = await cam.current.takePictureAsync(option);
    console.log(cam.current.getSupportedRatioAsync());
    const source = pic.url;
    if (source) {
      cam.currect.resumePreview();
      console.log(pic.source);
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
      <Camera ref={cam} style={styles.camera} type={type}>
        <View>
          <TouchableOpacity style={styles.button1}>
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
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  camera: {
    width: width - 10,
    alignSelf: "center",
    height: height - 20,
  },
  button: { width: 100, height: 100, alignSelf: "center" },
  button1: { width: 100, height: 100, top: height - 200, alignSelf: "center" },
  text: { fontSize: 35 },
});
