import * as React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Carousel from "../../Components/Carousel";
import { dummyData } from "../../Data/ImgData";
import { Card } from "../../Components/Cards";
export default function HomeScreen() {
  return (
    <>
      <Carousel data={dummyData} />
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <Card data={dummyData} />
      </ScrollView>
    </>
  );
}
