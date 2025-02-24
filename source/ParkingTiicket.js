import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator } from "react-native";
import Back from "../assets/icon/back.svg";
import { useFonts } from "expo-font";
import QRCode from "react-native-qrcode-svg";

const ParkingTicket = ({ route, navigation }) => {
  const { fullname, vehiclenumber, phonenumber, selectedValue, placeBooked, amountPerHour, hours, totalAmount, bookingTime, bookingDate } = route.params;
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    Radley: require("../fonts/Radley-Regular.ttf"),
    Reggae: require("../fonts/ReggaeOne-Regular.ttf"),
    Rakkas: require("../fonts/Rakkas-Regular.ttf"),
  });

  // Show loading indicator while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#EAD4B4" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header Section */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.roundButton} onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Parking Ticket</Text>
      </View>

      {/* Ticket Container */}
      <View style={styles.ticketContainer}>
        {/* Notch effects on left and right */}
        <View style={styles.notchLeft} />
        <View style={styles.notchRight} />

        <View style={{ alignItems: "center" }}>
          <QRCode value={`${fullname}, ${vehiclenumber}, ${placeBooked}`}  size={190} />
        </View>
        <Text style={styles.scanText}>
          Scan this QR on the scanner machine while you are in parking
        </Text>

        {/* Ticket Details */}
        <View style={{ flexDirection: "row", marginTop:30 }}>
          <View>
            <View>
              <Text style={styles.header}>Name:</Text>
              <Text style={styles.subheader}>{fullname}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.header}>Parking Area:</Text>
              <Text style={styles.subheader}>{placeBooked}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.header}>Duration:</Text>
              <Text style={styles.subheader}>{hours}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.header}>Date:</Text>
              <Text style={styles.subheader}>{bookingDate}</Text>
            </View>
          </View>

          {/* Side details */}
          <View style={{ marginLeft: 50 }}>
            <View>
              <Text style={styles.header}>Vehicle Number:</Text>
              <Text style={styles.subheader}>{vehiclenumber}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.header}>Parking Slot:</Text>
              <Text style={styles.subheader}>{placeBooked}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.header}>Time:</Text>
              <Text style={styles.subheader}>{bookingTime}</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={styles.header}>Phone Number:</Text>
              <Text style={styles.subheader}>{phonenumber}</Text>
            </View>
          </View>
        </View>
      </View>
      {/* Done Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btntxt}>Done</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000000",
    paddingLeft: 15,
  },
  headerText: {
    color: "white",
    fontSize: 30,
    fontFamily: "Radley",
    marginTop: 20,
    alignSelf: "center",
    marginLeft: 30,
    fontFamily: "Reggae",
  },
  headerRow: {
    flexDirection: "row",
  },
  roundButton: {
    backgroundColor: "#EAD4B4AB",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginTop: 20,
    marginLeft: 5,
  },
  ticketContainer: {
    backgroundColor: "#FFF",
    width: 330,
    height: 550,
    marginLeft: 5,
    marginTop: 30,
    borderRadius: 30,
    paddingTop: 10,
    position: "relative", // Needed for overlay circles
    overflow: "hidden",
  },
  scanText: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
  header: {
    marginLeft: 10,
    fontFamily: "Radley",
    fontSize: 16,
  },
  subheader: {
    marginLeft: 10,
    fontFamily: "Rakkas",
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#EAD4B4",
    borderRadius: 50,
    width: 240,
    height: 60,
    alignSelf: "center",
  },
  btntxt: {
    fontSize: 28,
    marginTop: 10,
    textAlign: "center",
    fontFamily: "Reggae",
  },
  notchLeft: {
    position: "absolute",
    left: -15, // Moves it outside the left side
    top: "50%",
    width: 30,
    height: 30,
    backgroundColor: "black",
    borderRadius: 15,
    marginTop: -15, // Center align on Y-axis
  },
  notchRight: {
    position: "absolute",
    right: -15, // Moves it outside the right side
    top: "50%",
    width: 30,
    height: 30,
    backgroundColor: "black",
    borderRadius: 15,
    marginTop: -15, // Center align on Y-axis
  },
});

export default ParkingTicket;
