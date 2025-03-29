import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator, SafeAreaView, TextInput } from "react-native";
import { useFonts } from "expo-font";
import Search from "../assets/icon/search.svg";

const Headertextcomponent = () => {
  const [fontsLoaded] = useFonts({
    Radley: require("../fonts/Radley-Regular.ttf"),
    Pompiere: require("../fonts/Pompiere-Regular.ttf"),
    Songmyung: require("../fonts/SongMyung-Regular.ttf"),
  });

  // If fonts are not loaded, show a loading spinner
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#EAD4B4" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>Parkings Around you</Text>
      </View>
      <View style={styles.searchbox}>
        <View style={{ flexDirection: "row" }}>
          <Search style={styles.searchsvg} />
          <TextInput 
            style={styles.searchText} 
            placeholder="Search Parking"
            placeholderTextColor="#D0CBCB70"
            selectionColor="#D0CBCB70" 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 18, 
    marginLeft: 90, 
    marginTop: 10,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Songmyung",
  },
  searchbox: {
    backgroundColor: "#D6D1CA52",
    height: 50, // Fixed height for search box
    width: 300, // Fixed width for search box
    borderRadius: 25,
    marginLeft: 15,
    marginTop: 30,
  },
  searchsvg: {
    marginLeft: 20, // Fixed margin
    marginTop: 10,
  },
  searchText: {
    marginLeft: 20, // Fixed margin
    fontSize: 16, // Fixed font size
    height: 50, // Same as search box height
    width: 250, // Adjusted to fit the search box
    borderRadius: 25,
  },
});

export default Headertextcomponent;
