import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator, Dimensions,SafeAreaView} from "react-native";
import { useFonts } from "expo-font";
import Back from "../assets/icon/back.svg";
import Search from "../assets/icon/search.svg";
import { TextInput } from "react-native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

const Headertextcomponent = () => {
  const [fontsLoaded] = useFonts({
    Radley: require("../assets/Radley-Regular.ttf"),
    Pompiere: require("../assets/Pompiere-Regular.ttf"),
    Songmyung: require("../assets/SongMyung-Regular.ttf"),
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
        <TouchableOpacity style={styles.round}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.text}>Parkings Around you</Text>
      </View>
      <View style={styles.searchbox}>
        <View style={{ flexDirection: "row" }}>
          <Search style={styles.searchsvg} />
          <TextInput style={styles.searchText} placeholder="Search Parking"
          placeholderTextColor={"#D0CBCB70"}
          selectionColor={"#D0CBCB70"}></TextInput>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  round: {
    backgroundColor: "#EAD4B4AB",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.1, // 10% of the screen width
    height: width * 0.1, // 10% of the screen width (same as width for a circular button)
    marginTop: 5,
  },
  text: {
    fontSize: width * 0.05, // 5% of the screen width
    marginLeft: width * 0.1, // Margin as 10% of the screen width
    marginTop: 10,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Songmyung",
  },
  searchbox: {
    backgroundColor: "#D6D1CA52",
    height: height * 0.07, // 7% of the screen height
    width: width * 0.84, // 90% of the screen width
    borderRadius: 50,
    marginLeft: 15,
    marginTop: 30,
    
  },
  searchsvg: {
    marginLeft: width * 0.05, // 5% of the screen width,
    marginTop:10
  },
  searchText: {
    marginLeft: width * 0.1, // 10% of the screen width
    fontSize: width * 0.05, // 5% of the screen width
    height: height * 0.07, // 7% of the screen height
    width: width * 0.84,
    borderRadius: 50,
    
    
  },
});

export default Headertextcomponent;
