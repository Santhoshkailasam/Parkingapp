import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useFonts } from "expo-font";

const Mainpage = () => {
  // Font loading
  const [fontsLoaded] = useFonts({
    Radley: require("../assets/Radley-Regular.ttf"),
    Pompiere: require("../assets/Pompiere-Regular.ttf"),
  });

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      {/* Image */}
      <Image
        source={require("../assets/image/enterscreenimage.png")}
        style={{ height: 550, width: 360 }}
      />
      <View style={{ position: "absolute", bottom: 120 }}>
        {/* Main header */}
        <Text style={[styles.Mainheader, { marginLeft: 70 }]}>Explore Your</Text>
        <Text style={[styles.Mainheader, { marginLeft: 50 }]}>nearby parking</Text>
        <Text style={[styles.Mainheader, { marginLeft: 130 }]}>places</Text>
        
        {/* Subheader */}
        <Text style={styles.subheader}>Search parking space near your</Text>
        <Text style={styles.subheader}>location, Pre-book your parking</Text>
        <Text style={styles.subheader}>space and pay via online mode.</Text>
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontSize: 35, fontFamily: "Radley" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  subheader: {
    color: "#EAD4B4AB",
    fontSize: 35,
    marginLeft: 13,
    fontFamily: "Pompiere",
  },
  button: {
    backgroundColor: "#EAD4B4",
    width: 200,
    height: 55,
    borderRadius: 50,
    marginTop: 180,
    alignSelf: "center", // Center button horizontally
    justifyContent: "center",
    alignItems: "center", // Center text inside the button
  },
  Mainheader: {
    color: "#EAD4B4AB",
    fontSize: 42,
    fontFamily: "Radley",
  },
});

export default Mainpage;
