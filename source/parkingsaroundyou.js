import React from "react";
import { Text,View,StyleSheet,SafeAreaView } from "react-native";
import Headertextcomponent from "../component/heading_for_page";
import Bookingcomponent from "../component/Bookingcomponent";
import { ScrollView } from "react-native";
const NearbyParking =()=>{
    return(
       <SafeAreaView style={styles.maincontainer}>
        <Headertextcomponent></Headertextcomponent>
        <ScrollView style={{paddingBottom:20}} showsVerticalScrollIndicator={true}>
        <Bookingcomponent image={require("../assets/image/tcscarparking.jpeg")} Text="Tech Car Parking"></Bookingcomponent>
        <Bookingcomponent image={require("../assets/image/techpark.jpeg")} Text="TCS Car Parking"></Bookingcomponent>
        <Bookingcomponent image={require("../assets/image/wiprocarparking.jpeg")}Text="Wipro Car Parking"></Bookingcomponent>
        <Bookingcomponent image={require("../assets/image/tcscarparking.jpeg")}  Text="Vijay car parking"></Bookingcomponent>
       </ScrollView>
       </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    maincontainer:{
        backgroundColor:"#000000",
        flex:1
    }
})
export default NearbyParking;