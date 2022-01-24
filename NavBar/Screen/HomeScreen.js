import * as React from "react";
import { FlatList, Button } from "react-native";
import Carousel from "../../Components/Carousel";
import { carouselData } from "../../Data/ImgData";
import { Card } from "../../Components/Cards";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      CarouselData: [],
      loading: false
    };
  }
  componentDidMount() {
    // to fetch data of Hotels in Carousel
    getDocs(collection(db, "Carousel")).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        this.state.CarouselData.push({ ...doc.data() })
        this.setState({ loading: true })
        // this.state.CarouselData.push({ ...doc.data(), id: doc.id });
      });
    });
    // To fetch data of Hotels 
    getDocs(collection(db, "Hotel")).then(async (snapshort) => {
      snapshort.docs.forEach((doc) => {
        this.state.data.push({ ...doc.data() });
        this.setState({ loading: true })
      });
    });
  }
  render() {
    return this.state.data ? (
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
    ) : (
      <>
      </>
    )
  }
}
