import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { useFonts } from "expo-font";
import Goggleicon from "../assets/icon/google.svg";
import Appleicon from "../assets/icon/appleicon.svg";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase service/firebaseAuth";

const Loginscreen = () => {
  const [Email, setEmail] = useState(""); 
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState(""); // Error state for login
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const navigation = useNavigation();

  // Handle Login
  const Handler = () => {
    setError(""); // Reset error before attempting login
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate("Footerpage");

        // Show success alert
        Alert.alert("Log in", "Sign in successfully");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message); // Set the error message on failure
      });
  };

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

  const Registerscreen = () => {
    navigation.navigate("Registerpage");
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View>
        <Text style={styles.title}>Welcome Back</Text>
  
        <View style={styles.container}>
          {/* Email container */}
          <Text style={styles.header}>Email:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={Email}
              onChangeText={setEmail}
              placeholder="Email"
              selectionColor="grey"
              style={styles.textinput}
            />
          </View>

          {/* Password container */}
          <Text style={styles.header}>Password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={Password}
              onChangeText={setPassword}
              placeholder="Password"
              selectionColor="grey"
              secureTextEntry={!showPassword} // Conditionally show/hide password
              style={styles.textinput}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowPassword((prevState) => !prevState)} // Toggle password visibility
            >
              <Text style={styles.showPasswordText}>
                {showPassword ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Log in button */}
        <TouchableOpacity style={styles.btn} onPress={Handler}>
          <Text style={{ color: "#3F372E", fontSize: 16, fontFamily: "Reggae" }}>Log in</Text>
        </TouchableOpacity>

        {/* Error message */}
          {Error ? (
             <View style={styles.errorContainer}>
               <Text style={styles.errorText}>{Error}</Text>
             </View>
            ) : null}

        {/* Forget password */}
        <TouchableOpacity style={{ marginLeft: 110, marginBottom: 20 }}>
          <Text style={{ color: "white", fontSize: 17 }}>Forget Password</Text>
        </TouchableOpacity>
        
        {/* Register button */}
        <TouchableOpacity style={{ marginLeft: 90, marginBottom: 10 }} onPress={Registerscreen}>
          <Text style={{ color: "white", fontSize: 17 }}>Don't Have an Account?</Text>
        </TouchableOpacity>

        {/* Separator for social login */}
        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separatorLine} />
        </View>

        {/* Social Login buttons */}
        <TouchableOpacity style={styles.socialButton}>
          <View style={{ flexDirection: "row" }}>
            <Goggleicon />
            <Text style={styles.socialButtonText}>Sign in with Google</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <View style={{ flexDirection: "row" }}>
            <Appleicon />
            <Text style={styles.socialButtonText}>Sign in with Apple</Text>
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#3F372E",
  },
  title: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  container: {
    marginTop: 30,
  },
  header: {
    color: "white",
    marginLeft: 57,
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  textinput: {
    width: "70%",
    backgroundColor: "#766E60",
    borderRadius: 25,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Rakkas",
    textAlign: "left", // Left-align text input
    paddingLeft: 15,   // Added padding for better text position
    paddingTop:15
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
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "white",
    marginLeft: 5,
  },
  separatorText: {
    marginLeft: 5,
    color: "#FFF",
    fontSize: 14,
  },
  socialButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#EAD4B4",
    borderRadius: 25,
    justifyContent: "center",
    paddingLeft: 15,
    marginBottom: 15,
    marginLeft: 35,
  },
  socialButtonText: {
    fontSize: 16,
    fontFamily: "Reggae",
    marginTop: 10,
    marginLeft: 10,
  },
  errorContainer: {
    alignItems: "center",
    marginBottom:10
  },
  errorText: {
    color: "red",
    fontSize: 16,
    fontWeight: "bold",
  },
  passwordContainer: {
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
    fontFamily: "Rakkass",
  },
  showPasswordButton: {
    position: "absolute",
    right: 10,
    top: 15,
  },
  showPasswordText: {
    color: "#FFF",
    fontSize: 16,
  },
});

export default Loginscreen;
