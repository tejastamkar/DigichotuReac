import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Screen/HomeScreen";
import ProfileScreen from "./Screen/ProfileScreen";
import ReelScreen from "./Screen/ReelScreen";
import NotiflyScreen from "./Screen/NotiflyScreen";
import { ReviewScreen } from "../Screens/Review/ReviewScreen";

//Screens Names
const Home = "Digi Chotu";
const Profile = "Profile";
const Reel = "Shots";
const Notifly = "Notifly";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function Home_Review() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerTitleAlign: "center", title: "Digi Chotu" }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen name="Review" component={ReviewScreen} />
    </Stack.Navigator>
  );
}

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={Home}
        screenOptions={({ route }) => ({
          headerTitleAlign: "center",
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
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#933FB6",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          options={{ headerShown: false }}
          name={Home}
          component={Home_Review}
        />
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
