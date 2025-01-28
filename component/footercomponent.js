import React from "react";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Bookmark from "../assets/icon/Bookmark.svg";
import Parking from "../assets/icon/Parking Sign.svg";
import Home from "../assets/icon/Home 2.svg";
import NearbyParking from "../source/parkingsaroundyou";
import ProfileScreen from "../source/ProfileScreen";
import Mapscreen from "../source/mapscreen";

const Tab = createBottomTabNavigator();
const {width,height}=Dimensions.get("window")
const FooterComponent = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: styles.tabBar, // Apply custom style to the tab bar
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return <Home width={size} height={size} fill={color} />;
          } else if (route.name === "Parking") {
            return <Parking width={size} height={size} fill={color} />;
          } else if (route.name === "Profile") {
            return <Bookmark width={size} height={size} fill={color} />;
          }
        },
        tabBarLabelStyle:styles.tabBarLabel,
        tabBarActiveTintColor: "white", // Color for active tab
        tabBarInactiveTintColor: "gray", // Color for inactive tab
        headerShown: false, // Hide the header
      })}
    >
      <Tab.Screen name="Home" component={NearbyParking} />
      <Tab.Screen name="Parking" component={Mapscreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#EAD4B4", // Background for the tab bar
    borderTopWidth: 4, // Border width at the top
    borderColor: "#ccc", // Border color
    height:height*0.09, // Height of the tab bar
    paddingBottom: 10, // Padding at the bottom for better spacing
    paddingTop: 10, // Padding at the top
    borderTopWidth:0
  },
  tabBarLabel: {
    fontSize: 16, // Increase the font size of the tab labels
    fontWeight: 'bold', // Optional: make the text bold
  }
});

export default FooterComponent;
