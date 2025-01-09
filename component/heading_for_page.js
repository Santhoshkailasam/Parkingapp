import React from "react";
import { View, StyleSheet, TouchableOpacity,Text } from "react-native";
import Back from "../assets/icon/back.svg"
const Headertextcomponent = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={styles.round}>
          <Back></Back>
       </TouchableOpacity>
       <Text style={styles.text}>Parkings Around you</Text>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  round: {
    backgroundColor: "#EAD4B4AB",
    borderRadius: 50,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width:50,
    height:50
  },
  text:{
       fontSize:20,
       marginLeft:40,
       marginTop:10
  }
});

export default Headertextcomponent;
