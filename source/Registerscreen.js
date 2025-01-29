import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ActivityIndicator, Alert } from "react-native";
import { useFonts } from "expo-font";
import Goggleicon from "../assets/icon/google.svg";
import Appleicon from "../assets/icon/appleicon.svg";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase service/firebaseAuth";

const Registerscreen = () => {
  // Register state
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Error, setError] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState(""); // For confirm password
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
  const [user, setUser] = useState(null);

  // Authentication listener to update user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Navigation hook
  const navigation = useNavigation();

  // Handler function for registration
  const handleRegister = () => {
    setError("");

    if (Password !== ConfirmPassword) {
      setError("Passwords do not match");
      return;
    }

    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: name }).then(() => user);
      })
      .then((updatedUser) => {
        setUser(updatedUser);
        Alert.alert("Success", "Registered successfully");
        navigation.navigate("Loginpage");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // Fonts
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

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View>
        <Text style={styles.title}>Create Account</Text>
        <View style={styles.container}>
          {/* Name */}
          <Text style={styles.header}>Name:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={name} // Binding state to the TextInput
              onChangeText={setName}
              placeholder="Name"
              selectionColor="grey"
              style={styles.textinput}
            />
          </View>

          {/* Email */}
          <Text style={styles.header}>Email:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={Email} // Binding state to the TextInput
              onChangeText={setEmail}
              placeholder="Email"
              selectionColor="grey"
              style={styles.textinput}
            />
          </View>

          {/* Password */}
          <Text style={styles.header}>Password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={Password} // Binding state to the TextInput
              onChangeText={setPassword}
              placeholder="Password"
              secureTextEntry={!showPassword}
              selectionColor="grey"
              style={styles.textinput}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowPassword((prevState) => !prevState)} // Toggle password visibility
            >
              <Text style={styles.showPasswordText}>{showPassword ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <Text style={styles.header}>Confirm Password:</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              value={ConfirmPassword} // Binding state to the TextInput
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              selectionColor="grey"
              style={styles.textinput}
            />
            <TouchableOpacity
              style={styles.showPasswordButton}
              onPress={() => setShowConfirmPassword((prevState) => !prevState)} // Toggle confirm password visibility
            >
              <Text style={styles.showPasswordText}>
                {showConfirmPassword ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.btn} onPress={handleRegister}>
          <Text style={{ color: "#3F372E", fontSize: 16, fontFamily: "Reggae" }}>Register</Text>
        </TouchableOpacity>

        {Error && <Text style={{ color: "red" }}>{Error}</Text>}

        <TouchableOpacity style={{ marginLeft: 80, marginTop: 10 }} onPress={() => navigation.navigate("Loginpage")}>
          <Text style={{ color: "white", fontSize: 17 }}>Already Have an Account?</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <View style={styles.separatorLine} />
          <Text style={styles.separatorText}>OR</Text>
          <View style={styles.separatorLine} />
        </View>

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
    marginLeft: 100,
    marginTop: 5,
  },
  container: {
    marginTop: 20,
  },
  header: {
    color: "white",
    marginLeft: 57,
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 10,
  },
  textinput: {
    width: "90%",
    backgroundColor: "#766E60",
    borderRadius: 25,
    paddingLeft: 15,
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Rakkass",
    marginTop: 5,
  },
  btn: {
    width: "40%",
    height: 50,
    backgroundColor: "#EAD4B4",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 100,
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
  passwordContainer: {
    width: "70%",
    height: 60,
    backgroundColor: "#766E60",
    borderRadius: 25,
    marginBottom: 20,
    marginLeft: 50,
    fontSize: 20,
    borderColor: "white",
    borderWidth: 1,
    fontFamily: "Rakkass",
    paddingLeft: 5,
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

export default Registerscreen;
