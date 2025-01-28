import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ActivityIndicator,SafeAreaView} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

const Mainpage = () => {
  // Navigation function to go to Map screen
  const navigation = useNavigation();
  const mapscreen = () => {
    navigation.navigate("Loginpage");
  };

  // Load fonts
  const [fontsLoaded] = useFonts({
    Radley: require("../fonts/Radley-Regular.ttf"),
    Pompiere: require("../fonts/Pompiere-Regular.ttf"),
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
      {/* Image */}
      <Image
        source={require("../assets/image/enterscreenimage.png")}
        style={styles.image}
        resizeMode="cover"  // Ensures the image covers the full width
      />
      <View style={styles.textContainer}>
        {/* Main header */}
        <Text style={styles.Mainheader}>Explore Your</Text>
        <Text style={styles.Mainheader}>nearby parking</Text>
        <Text style={styles.Mainheader}>places</Text>

        {/* Subheader with fixed font size */}
        <Text style={styles.subheader}>Search parking space near your</Text>
        <Text style={styles.subheader}>location, Pre-book your parking</Text>
        <Text style={styles.subheader}>space and pay via online mode.</Text>
      </View>
      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={mapscreen}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  image: {
    width: width, // Set the image width to be full screen width
    height: height * 0.6, // Set height to 60% of the screen height, adjust as needed
    alignSelf: "center",  // Centers the image horizontally
  },
  textContainer: {
    position: "absolute",
    bottom: height * 0.13,  // Adjusts the position of the text container
    alignSelf: "center",
    alignItems: "center",
  },
  Mainheader: {
    color: "#EAD4B4AB",
    fontSize: 40,
    fontFamily: "Radley",
    textAlign: "center",
  },
  subheader: {
    color: "#EAD4B4AB",
    fontSize: 35,  // Fixed font size for subheader
    marginLeft: 13,
    fontFamily: "Pompiere",
  },
  button: {
    backgroundColor: "#EAD4B4",
    width: 200,
    height: 55,
    borderRadius: 50,
    position: "absolute",
    bottom: 20,  // Adjust this value to control the vertical position of the button
    alignSelf: "center",  // Centers the button horizontally
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 35,
    fontFamily: "Radley",
  },
});

export default Mainpage;
