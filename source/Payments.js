import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, Image} from "react-native";
import Back from "../assets/icon/back.svg";
import { useFonts } from "expo-font";
import Card from "../assets/image/Cash and Credit Card.svg";
import RightTriangle from "../assets/icon/right triagle.svg";
import { useNavigation } from "@react-navigation/native";
const Payment = () => {
  // Load custom fonts
  const [fontsLoaded] = useFonts({
    Radley: require("../fonts/Radley-Regular.ttf"),
    Songmyung: require("../fonts/SongMyung-Regular.ttf"),
  });

  // Show loading indicator while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" color="#EAD4B4" />
      </View>
    );
  }
 const navigation=useNavigation();
 const backnavigation=()=>{
     navigation.navigate("Homepage")
 }
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header Section */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.roundButton} onPress={()=>navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.headerText}>Payment</Text>
      </View>

      {/* Payment Method Section */}
      <View style={styles.paymentMethodRow}>
        <View>
          <Text style={styles.paymentText}>Payment</Text>
          <Text style={styles.methodText}>method</Text>
        </View>
        <View style={styles.cardIconContainer}>
          <Card />
        </View>
      </View>

      {/* Bank Account Section */}
      <View style={styles.headerBox}>
        <Text style={styles.sectionTitle}>Bank Account</Text>
      </View>
      <TouchableOpacity style={styles.paymentOptionRow}>
        <View style={styles.paymentIconContainer}>
          <Image source={require("../assets/image/icici.png")} style={styles.bankImage} />
        </View>
        <View>
          <Text style={styles.bankText}>ICICI Bank</Text>
          <Text style={styles.subText}>Bank pay</Text>
        </View>
        <RightTriangle style={styles.triangleIcon} />
      </TouchableOpacity>

      {/* Credit Card Section */}
      <View style={styles.headerBox}>
        <Text style={styles.sectionTitle}>Credit Cards</Text>
      </View>
      <TouchableOpacity style={styles.paymentOptionRow}>
        <View style={styles.paymentIconContainer}>
          <Image source={require("../assets/image/Visa.png")} style={styles.bankImage} />
        </View>
        <View>
          <Text style={styles.bankText}>1234***890</Text>
          <Text style={styles.subText}>Visa pay</Text>
        </View>
        <RightTriangle style={styles.triangleIcon} />
      </TouchableOpacity>

      {/* UPI Methods Section */}
      <View style={styles.headerBox}>
        <Text style={styles.sectionTitle}>UPI Methods</Text>
      </View>
      <TouchableOpacity style={styles.paymentOptionRow}>
        <View style={styles.paymentIconContainer}>
          <Image source={require("../assets/image/Google Pay.png")} style={styles.bankImage} />
        </View>
        <View>
          <Text style={styles.bankText}>3214***543</Text>
          <Text style={styles.subText}>Gpay</Text>
        </View>
        <RightTriangle style={styles.triangleIcon} />
      </TouchableOpacity>

      {/* Pay Button */}
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>Pay</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Stylesheet
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000000",
    paddingLeft: 15,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  headerText: {
    color: "white",
    fontSize: 34,
    fontFamily: "Radley",
    marginTop: 20,
    alignSelf: "center",
    marginLeft: 50,
  },
  paymentMethodRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  paymentText: {
    color: "white",
    fontFamily: "Songmyung",
    fontSize: 35,
    marginTop: 20,
  },
  methodText: {
    color: "white",
    fontFamily: "Songmyung",
    fontSize: 35,
  },
  cardIconContainer: {
    backgroundColor: "#EAD4B4AB",
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: "center",
    paddingLeft: 10,
    marginTop: 10,
  },
  headerBox: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#EAD4B4",
    borderRadius: 50,
    width: 200,
  },
  sectionTitle: {
    fontFamily: "Songmyung",
    fontSize: 27,
    alignSelf: "center",
  },
  paymentOptionRow: {
    flexDirection: "row",
  },
  paymentIconContainer: {
    backgroundColor: "#EAD4B4AB",
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: "center",
    marginTop: 20,
  },
  bankImage: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  bankText: {
    color: "white",
    marginTop: 50,
    marginLeft: 20,
    fontFamily: "Songmyung",
    fontSize: 30,
  },
  subText: {
    color: "white",
    marginLeft: 20,
    fontFamily: "Songmyung",
    fontSize: 20,
  },
  triangleIcon: {
    marginTop: 50,
    marginLeft: 40,
  },
  payButton: {
    marginTop: 15,
    backgroundColor: "#EAD4B4",
    borderRadius: 50,
    width: 140,
    height: 50,
    alignSelf: "center",
  },
  payButtonText: {
    fontFamily: "Songmyung",
    fontSize: 25,
    marginTop: 10,
    textAlign: "center",
  },
});
export default Payment;
