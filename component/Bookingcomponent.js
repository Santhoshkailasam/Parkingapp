import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const Bookingcomponent = (props) => {
  // Navigation
  const navigation = useNavigation();
  const bookingscreen = () => {
    navigation.navigate("Bookingscreen");
  };

  // Import Required Fonts
  const [fontsLoaded] = useFonts({
    Radley: require("../fonts/Radley-Regular.ttf"),
    Pompiere: require("../fonts/Pompiere-Regular.ttf"),
    Songmyung: require("../fonts/SongMyung-Regular.ttf"),
    Sedansc: require("../fonts/SedanSC-Regular.ttf"),
    InknutAntiqua: require("../fonts/InknutAntiqua-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null; // Ensure no content is shown until fonts are loaded
  }

  return (
    <SafeAreaView>
      {/* This is a booking box */}
      <View style={styles.bookingbox}>
        {/* This is a header image box */}
        <View style={styles.headerbox}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.image} source={props.image} />
            <Text style={styles.headerText}>{props.Text}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.label}>Distance</Text>
              <Text style={[styles.label, { marginLeft: 50 }]}>Price</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <Text style={styles.value}>2.5 KM</Text>
              <Text style={[styles.value, { marginLeft: 50 }]}>₹ 50/Hour</Text>
            </View>
          </View>
          {/* Booking button */}
          <TouchableOpacity style={styles.button} onPress={bookingscreen}>
            <Text style={styles.buttonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 60, // Fixed image width
    height: 60, // Fixed image height
    borderRadius: 30, // Half of width/height for a perfect circle
    marginTop: 5,
  },
  headerbox: {
    backgroundColor: "rgba(175, 172, 172, 0.29)",
    width: 320, // Fixed width
    height: 70, // Fixed height
    borderRadius: 50,
    paddingLeft: 15,
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontSize: 14,
    fontFamily: "InknutAntiqua",
    marginLeft: 15,
    paddingTop: 12,
  },
  bookingbox: {
    backgroundColor: "rgba(214, 209, 202, 0.35)",
    borderRadius: 30,
    width: 320, 
    height: 150,
    marginLeft: 20,
    marginTop: 10,
    opacity: 0.9,
  },
  label: {
    color: "white",
    fontFamily: "Radley",
    marginLeft: 20,
  },
  value: {
    color: "white",
    marginLeft: 20,
  },
  button: {
    backgroundColor: "#EAD4B4",
    width: 100, 
    height: 50, 
    borderRadius: 25, 
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 25,
  },
  buttonText: {
    fontFamily: "Radley",
  },
});

export default Bookingcomponent;
