import * as React from "react";
import { View, Text, Image } from "react-native";
import Carousel from "../../Components/Carousel";
import { dummyData } from "../../Data/ImgData";
import { Card } from "../../Components/Cards";
export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Carousel data={dummyData} />
      <View>
        {/* <Card data={dummyData}/> */}
        <Text>Test</Text>
      </View>
    </View>
  );
}
