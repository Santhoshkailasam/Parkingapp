import React from "react";
import { View, StyleSheet, TouchableOpacity,Text } from "react-native";
import Back from "../assets/icon/back.svg";
import Search from "../assets/icon/search.svg"
const Headertextcomponent = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={styles.round}>
          <Back></Back>
       </TouchableOpacity>
       <Text style={styles.text}>Parkings Around you</Text>
     </View>
     <View style={styles.searchbox}>
     <View style={{flexDirection:"row"}}>
      <Search style={styles.searchsvg}></Search>
      <Text style={{color:"#D0CBCB70",marginLeft:50,fontSize:20}}>Search parking</Text>
     </View>
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
    width:40,
    height:40,
    marginTop:5,
  },
  text:{
       fontSize:20,
       marginLeft:40,
       marginTop:10,
       fontWeight:"bold",
       color:"white"
  },
  searchbox:{
    backgroundColor:"#D6D1CA52",
    height:50,
    width:310,
    borderRadius:50,
    marginLeft:13,
    marginTop:30,
    paddingTop:10
  },
  searchsvg:{
     marginLeft:20
  }
});

export default Headertextcomponent;
