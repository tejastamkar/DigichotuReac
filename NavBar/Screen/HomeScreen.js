import * as React from "react";
import { FlatList, Button } from "react-native";
import Carousel from "../../Components/Carousel";
import { carouselData, cardData } from "../../Data/ImgData";
import { Card } from "../../Components/Cards";
export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      style={{ backgroundColor: "#fff" }}
      ListHeaderComponent={
        <>
          <Carousel data={carouselData} />
        </>
      }
      ListFooterComponent={
        <>
          <Card data={cardData} />
        </>
      }
    />
  );
}
