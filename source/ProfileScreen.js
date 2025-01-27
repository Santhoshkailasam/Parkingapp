import React from 'react';
import { View, Text, Image, Switch, TouchableOpacity,SafeAreaView,StyleSheet } from 'react-native';
import Back from "../assets/icon/back.svg";
const  ProfileScreen=()=>{
  return(
    <SafeAreaView>
      <View>
      <TouchableOpacity style={styles.round}>
      <Back />
      </TouchableOpacity>
      <Text>My profile</Text>
      </View>
    </SafeAreaView>
  )
};
const styles=StyleSheet.create({
  round: {
    backgroundColor: "#EAD4B4AB",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "50", 
    height: "50", 
    marginTop: 5,
  },
})
export default ProfileScreen;