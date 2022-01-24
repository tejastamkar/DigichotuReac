import * as React from "react";
import { FlatList, Button } from "react-native";
import Carousel from "../../Components/Carousel";
import { carouselData } from "../../Data/ImgData";
import { Card } from "../../Components/Cards";
import { db } from "../../firebase";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      CarouselData: null,
    };
  }
  componentDidMount() {
    // to fetch data of Hotels in Carousel
    db.collection("Carousel")
      .get()
      .then((snapshot) => {
        const temp = [];
        snapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        this.setState({ CarouselData: temp });
      });
    // To fetch data of Hotels 
    db.collection("Hotel")
      .get()
      .then((snapshot) => {
        const temp = [];
        snapshot.forEach((doc) => {
          temp.push(doc.data());
        });
        this.setState({ data: temp });
      });
  }
  render() {
    return (
      <FlatList
        style={{ backgroundColor: "#fff" }}
        ListHeaderComponent={
          <>
            <Carousel data={this.state.CarouselData} />
          </>
        }
        ListFooterComponent={
          <>
            <Card data={this.state.data} />
          </>
        }
      />
    );
  }
}
