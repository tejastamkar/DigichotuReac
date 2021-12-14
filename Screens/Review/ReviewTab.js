import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HotelReview from "./HotelReview";
import UserReview from "./UserReview";
import * as React from "react";

const Tab = createMaterialTopTabNavigator();
export function ReviewTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HotelReview" component={HotelReview} />
      <Tab.Screen name="UserReview" component={UserReview} />
    </Tab.Navigator>
  );
}
