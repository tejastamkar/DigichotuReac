import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Screen/HomeScreen";
import ProfileScreen from "./Screen/ProfileScreen";

//Screens Names
const Home = "Digi Chotu";
const Profile = "Profile";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     initialRouteName={Home}
    //     screenOptions={({ route }) => ({
    //       tabBarIcon: ({ focused, color, size }) => {
    //         let iconName;
    //         let rn = route.name;

    //         if (rn === Home) {
    //           iconName = focused ? "home" : "home-outline";
    //         } else if (rn === Profile) {
    //           iconName = focused ? "settings" : "settings-outline";
    //         }

    //         // You can return any component that you like here!
    //         return <Ionicons name={iconName} size={size} color={color} />;
    //       },
    //     })}
    //     tabBarOptions={{
    //       activeTintColor: "tomato",
    //       inactiveTintColor: "grey",
    //       labelStyle: { paddingBottom: 10, fontSize: 10 },
    //       style: { padding: 50, height: 500 },
    //     }}

    //   >
    //     <Tab.Screen name={Home} component={HomeScreen} />
    //     <Tab.Screen name={Profile} component={ProfileScreen} />
    //   </Tab.Navigator>
    // </NavigationContainer>
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === Home) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === Profile) {
              iconName = focused ? "person" : "person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#933FB6",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name={Home}
          component={HomeScreen}
        />
        <Tab.Screen name={Profile} component={ProfileScreen} options={{ tabBarBadge: 1 }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
