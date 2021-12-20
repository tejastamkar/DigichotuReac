import * as React from "react";
import { FlatList, Button } from "react-native";
import Carousel from "../../Components/Carousel";
import { carouselData, cardData } from "../../Data/ImgData";
import { Card } from "../../Components/Cards";

export default function HomeScreen({ navigation, data }) {
  console.log("in the homescreen");
  console.log(data);
  return (
    <FlatList
      style={{ backgroundColor: "#fff" }}
      ListHeaderComponent={
        <>
          <Carousel data={carouselData} />
          <Button title="click me " onPress={() => getCard()} />
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
