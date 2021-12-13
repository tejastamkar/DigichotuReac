import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Screen/HomeScreen";
import ProfileScreen from "./Screen/ProfileScreen";
import ReelScreen from "./Screen/ReelScreen";
import NotiflyScreen from "./Screen/NotiflyScreen";

//Screens Names
const Home = "Digi Chotu";
const Profile = "Profile";
const Reel = "Shots";
const Notifly = "Notifly";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          headerTitleAlign:"center",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === Home) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === Profile) {
              iconName = focused ? "person" : "person-outline";
            } else if (rn === Reel) {
              iconName = "caret-forward-circle-outline";
            } else if (rn === Notifly) {
              iconName = focused ? "notifications" : "notifications-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#933FB6",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name={Home} component={HomeScreen} />
        <Tab.Screen name={Reel} component={ReelScreen} />
        <Tab.Screen
          name={Notifly}
          component={NotiflyScreen}
          options={{ tabBarBadge: 1 }}
        />
        <Tab.Screen name={Profile} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
