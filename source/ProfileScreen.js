import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ActivityIndicator, Switch, Image, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import Back from "../assets/icon/back.svg";
import RightTriangle from "../assets/icon/right triagle.svg"; 
import Logout from "../assets/icon/Logout.svg";
import { useNavigation } from '@react-navigation/native';
import auth from '../firebase service/firebaseAuth';
import { signOut } from 'firebase/auth';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  const [image, setImage] = useState(null);  // Correct useState for image
  const [profileImage, setProfileImage] = useState(null);  // Correct useState for profile image
  const [isEnabled, setIsEnabled] = useState(false); // Switch state
  const [fontsLoaded] = useFonts({
    Reggae: require("../fonts/ReggaeOne-Regular.ttf"),
    Rakkas: require("../fonts/Rakkas-Regular.ttf")
  });

  const navigation = useNavigation();
  const user = auth.currentUser;  // Firebase auth

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Loading screen while fonts are loading
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#EAD4B4" />
      </View>
    );
  }

  // Function for image picker
  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("Image Picker Error:", response.errorMessage);
      } else {
        const source = { uri: response.assets[0].uri };
        setProfileImage(source);  // Set the selected image URI
      }
    });
  };

  // Function for camera
  const openCamera = () => {
    const options = {
      mediaType: 'photo',  // Ensuring that only photos are taken
      cameraType: 'back',  // Using the back camera
      quality: 1,          // Maximum quality
    };

    launchCamera(options, (response) => {
      console.log(response);  // Log the entire response
      if (response.didCancel) {
        console.log('User canceled camera picker');
      } else if (response.errorCode) {
        console.error('Camera error: ', response.errorCode);
      } else {
        setImage(response.assets[0].uri);  // Set the camera photo URI
      }
    });
  };

  // Logout function
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Alert.alert(
          "Logout Successful",  // Title
          "You have been logged out.",  // Message
          [
            { 
              text: "OK", 
              onPress: () => navigation.replace("Loginpage") // Navigate after user clicks OK
            }
          ]
        );
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const Payment = () => {
    navigation.navigate("Paymentpage");  // Navigation to payment page
  };

  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.round} onPress={() => navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.header}>My profile</Text>
      </View>

      <TouchableOpacity style={styles.profileImgContainer} onPress={openCamera}>
        <Image
          source={profileImage || require("../assets/image/tcscarparking.jpeg")} // Default image
          style={styles.profileImg}
        />
        <View style={styles.cameraIcon}>
          <Icon name="camera" size={20} color="black" />
        </View>
      </TouchableOpacity>

      {user ? (
        <>
          <Text style={{ color: "white", textAlign: "center", fontFamily: "Reggae", marginTop: 10 }}>{user.displayName}</Text>
          <Text style={{ color: "white", textAlign: "center", fontFamily: "Reggae", marginTop: 10 }}>{user.email}</Text>
        </>
      ) : (
        <Text style={{ color: "white", textAlign: "center", fontFamily: "Reggae", marginTop: 10 }}>User not logged in</Text>
      )}

      {/* Switch */}
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}  // Track color
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}    // Thumb color
          onValueChange={toggleSwitch}
        />
      </View>

      {/* List of items */}
      {["My Payment Methods", "My Vehicles", "Saved Parking"].map((item, index) => (
        <TouchableOpacity
          style={styles.subheader} 
          key={index}
          onPress={() => {
            if (item === "My Payment Methods") {
              Payment();  // Navigate to Payment page
            }
          }}
        >
          <Text style={styles.text}>{item}</Text>
          <RightTriangle width={24} height={24} />
        </TouchableOpacity>
      ))}

      {/* Line separator */}
      <View style={styles.straightline}></View>

      {/* More items */}
      {["Edit Profile", "Change Password", "Check Parking Status"].map((item, index) => (
        <TouchableOpacity style={styles.subheader} key={index}>
          <Text style={styles.text}>{item}</Text>
          <RightTriangle width={24} height={24} />
        </TouchableOpacity>
      ))}

      {/* Logout button */}
      <TouchableOpacity style={styles.btn} onPress={handleLogout}>
        <View style={{ flexDirection: "row" }}>
          <Logout style={{ marginLeft: 10 }} />
          <Text style={{ color: "white", fontFamily: "Reggae", marginLeft: 5 }}>Logout</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: "#3F372E",
  },
  round: {
    backgroundColor: "#EAD4B4AB",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    marginTop: 20,
    marginLeft: 20,
  },
  header: {
    color: "white",
    fontSize: 30,
    fontFamily: "Reggae",
    marginLeft: 40,
    marginTop: 20,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  switchContainer: {
    alignItems: 'center',
    marginTop: 10,
    transform: [{ scaleX: 1.9 }, { scaleY: 1.4 }], // Apply transform to scale
  },
  subheader: {
    flexDirection: "row",
    justifyContent: "space-between", // Align text and icon properly
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 19,
    fontFamily: "Reggae",
    marginBottom: 10,
  },
  straightline: {
    backgroundColor: "white",
    height: 1,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "red",
    width: 110,
    height: 50,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 12,
    borderRadius: 50,
  },
  profileImgContainer: {
    alignSelf: "center",
    marginTop: 10,
    position: "relative",
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 5,
  },
});
export default ProfileScreen;
