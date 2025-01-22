import React from "react";
import { Text,View,StyleSheet } from "react-native";
import Headertextcomponent from "../component/heading_for_page";
import Bookingcomponent from "../component/Bookingcomponent";
const NearbyParking =()=>{
    return(
       <View style={styles.maincontainer}>
        <Headertextcomponent></Headertextcomponent>
       </View>
    )
}
const styles=StyleSheet.create({
    maincontainer:{
        backgroundColor:""
    }
})
export default NearbyParking;