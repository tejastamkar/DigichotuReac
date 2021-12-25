import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

export const PopCont = (text, onChangeText) => (
  <View style={styles.panel}>
    <View style={{ alignItems: "center" }}>
      <Text style={styles.panelTitle}>Review</Text>
    </View>
    <>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder="description  (Max 400 words)"
      />
    </>
    <TouchableOpacity style={styles.panelButton}>
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
    height: 765,
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
    padding: 10,
  },
});
