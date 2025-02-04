import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import auth from "../firebase service/firebaseAuth";
import { sendPasswordResetEmail } from "firebase/auth";

const Forgetpassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    Reggae: require("../fonts/ReggaeOne-Regular.ttf"),
    Rakkas: require("../fonts/Rakkas-Regular.ttf"),
  });

  // If fonts are not loaded, show a loading spinner
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#EAD4B4" />
      </View>
    );
  }

  // Function to send OTP (Password Reset Link)
  const handleSendOTP = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Please enter your registered email.");
      return;
    }

    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Check your email",
        "A password reset link has been sent to your email."
      );
      navigation.navigate("ResetPassword"); // Navigate to reset page
    } catch (error) {
      Alert.alert("Error", error.message);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Forget Password</Text>
        <View style={styles.container}>
          <Text style={styles.header}>Enter registered email:</Text>
          <View style={styles.EmailContainer}>
            <TextInput
              placeholder="Email"
              selectionColor="grey"
              style={styles.textinput}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={handleSendOTP}>
          {loading ? (
            <ActivityIndicator color="black" />
          ) : (
            <Text>Next</Text>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    color: "white",
    marginLeft: 57,
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  maincontainer: {
    flex: 1,
    backgroundColor: "#3F372E",
  },
  title: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
  },
  container: {
    marginTop: 30,
  },
  textinput: {
    width: "70%",
    backgroundColor: "#766E60",
    borderRadius: 25,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Rakkas",
    textAlign: "left",
    paddingLeft: 15,
    paddingTop: 15,
  },
  subcontainer: {
    marginTop: 170,
    backgroundColor: "#262626",
    width: 340,
    marginLeft: 10,
    borderRadius:50
  },
  EmailContainer: {
    width: "70%",
    height: 60,
    backgroundColor: "#766E60",
    borderRadius: 25,
    marginBottom: 40,
    color: "#FFF",
    fontSize: 16,
    marginLeft: 50,
    fontSize: 20,
    borderColor: "white",
    borderWidth: 1,
  },
  btn: {
    width: "40%",
    height: 50,
    backgroundColor: "#EAD4B4",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
    marginTop: 10,
    marginBottom: 20,
  },
});

export default Forgetpassword;
