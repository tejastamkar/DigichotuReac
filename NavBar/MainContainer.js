import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from "./Screen/HomeScreen";
import ProfileScreen from "./Screen/ProfileScreen";
import ReelScreen from "./Screen/ReelScreen";
import NotiflyScreen from "./Screen/NotiflyScreen";
import { ReviewScreen } from "../Screens/Review/ReviewScreen";
import { ShotsScreen } from "../Screens/ShotWin";
import { CameraScreen } from "../NavBar/Screen/Camerapage";
import { TabBar } from "react-native-tab-view";
import { Homeheader, CameraBtn } from "../Components/header";
import LoginScreen from "./Screen/LoginScreen";
import SignUpScreen from "./Screen/SignUpScreen";
//Screens Names
const Home = "Home";
const Profile = "Profile";
const Reel = "Shots";
const Notifly = "Notifly";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NavBar() {
  return (
    <Tab.Navigator initialRouteName={Home} screenOptions={screenSetting}>
      <Tab.Screen
        name={Home}
        component={HomeScreen}
        options={{
          headerTitle: () => <Homeheader />,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#fff",
            elevation: 0,
          },
          headerLeft: () => <CameraBtn />,
          tabBarActiveTintColor: "#933FB6",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        options={{ headerTitleAlign: "center", title: "Shots" }}
        name={Reel}
        component={ReelScreen}
        options={{
          tabBarActiveTintColor: "#933FB6",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name={Notifly}
        component={NotiflyScreen}
        options={{
          tabBarActiveTintColor: "#933FB6",
          tabBarInactiveTintColor: "gray",
          tabBarBadge: 1,
          tabBarBadgeStyle: { backgroundColor: "#933FB6" },
        }}
      />
      <Tab.Screen
        name={Profile}
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: "#933FB6",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
}

const screenSetting = ({ route }) => ({
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
});

function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name='login' options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name='Signup' options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="home"
          component={NavBar}
        />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen
          name="Camera"
          component={CameraScreen}
          options={{
            headerStatusBarHeight: 20,
          }}
        />
        <Stack.Screen
          name="shot"
          options={{
            headerTransparent: true,
            headerTintColor: "#fff",
            headerStatusBarHeight: 10,
          }}
          component={ShotsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
