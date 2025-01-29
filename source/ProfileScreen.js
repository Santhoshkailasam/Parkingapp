import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ActivityIndicator, Switch } from 'react-native';
import { useState } from 'react';
import Back from "../assets/icon/back.svg"; // Ensure this is the correct import for your SVG
import { useFonts } from 'expo-font';
import RightTriangle from "../assets/icon/right triagle.svg"; // Correct the name of your import to match the actual file
import Logout from "../assets/icon/Logout.svg"
import { useNavigation } from '@react-navigation/native';
import Payment from './Payments';
const ProfileScreen = () => {
  //use navigation 
  const navigation=useNavigation();

  const Payment=()=>{
    navigation.navigate("Paymentpage");
  }
  // Switch state
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Loading custom fonts
  const [fontsLoaded] = useFonts({
    Reggae: require("../fonts/ReggaeOne-Regular.ttf"),
    Rakkas: require("../fonts/Rakkas-Regular.ttf")
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
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.round} onPress={()=>navigation.goBack()}>
          <Back />
        </TouchableOpacity>
        <Text style={styles.header}>My profile</Text>
      </View>
      <View style={styles.profileimg}></View>
      <Text style={{ color: "white", textAlign: "center", fontFamily: "Reggae", marginTop: 10 }}>
        abinesh123@gmail.com
      </Text>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}  // Track color
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}    // Thumb color
          onValueChange={toggleSwitch}
        />
      </View>

      {/* List of items */}
      {["My Payment Methods", "My Vehicles", "Saved Parking"].map((item, index) => (
        <TouchableOpacity style={styles.subheader} key={index} 
        onPress={() => {
          if (item === "My Payment Methods") {
            navigation.navigate("Paymentpage"); 
          }
        }}>
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
      <TouchableOpacity style={styles.btn}>
        <View style={{flexDirection:"row"}}>
        <Logout style={{marginLeft:10}} />
        <Text style={{color:"white",fontFamily:"Reggae",marginLeft:5}}>Logout</Text>
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
    marginTop:20
  },
  profileimg: {
    borderRadius: 50,
    backgroundColor: "black",
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 130
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
    alignItems: "center"
  },
  text: {
    color: "white",
    fontSize: 19,
    fontFamily: "Reggae",
    marginBottom:10
  },
  straightline: {
    backgroundColor: "white",
    height: 1,
    marginTop:20
  },
  btn:{
    backgroundColor:"red",
    width:110,
    height:50,
    justifyContent:"center",
    alignSelf:"center",
    alignContent:"center",
    justifyContent:"center",
    marginTop:12,
    borderRadius:50
  }
});

export default ProfileScreen;
