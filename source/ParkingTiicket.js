import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, ActivityIndicator, Image} from "react-native";
import Back from "../assets/icon/back.svg";
import { useFonts } from "expo-font";
import QRCode from "react-native-qrcode-svg";
const ParkingTicket  =()=>{
        // Load custom fonts
        const [fontsLoaded] = useFonts({
          Radley: require("../fonts/Radley-Regular.ttf"),
          Songmyung: require("../fonts/SongMyung-Regular.ttf"),
        });
      
        // Show loading indicator while fonts are loading
        if (!fontsLoaded) {
          return (
            <View style={styles.centeredContainer}>
              <ActivityIndicator size="large" color="#EAD4B4" />
            </View>
          );
        }
    return(
        <SafeAreaView style={styles.mainContainer}>
        {/* Header Section */}
        <View style={styles.headerRow}>
          <TouchableOpacity style={styles.roundButton} onPress={()=>navigation.goBack()}>
            <Back />
          </TouchableOpacity>
          <Text style={styles.headerText}>Parking Ticket</Text>
        </View>
        <View style={styles.ticketcontainer}>
            <View style={{ alignItems:"center"}}>
           <QRCode value="https://your-qr-data.com" size={190} />
           </View>
           <Text style={styles.scanText}>
              Scan this QR on the scanner machine while you are in parking 
           </Text>
           {/* Ticket Details */}
        <View style={{flexDirection:"row",}}>
         <View>
           <View>
              <Text style={styles.header}>Name:</Text>
              <Text style={styles.subheader}>Abinesh M.L</Text>
            </View>
            <View style={{marginTop:10}}>
              <Text style={styles.header}>Parking Name:</Text>
              <Text style={styles.subheader}>Tech center</Text>
            </View>
            <View style={{marginTop:10}}>
               <Text style={styles.header}>Duration:</Text>
               <Text style={styles.subheader}>4 Hours</Text>
           </View>
           <View style={{marginTop:10}}>
               <Text style={styles.header}>Date:</Text>
               <Text style={styles.subheader}>26 Feb 2024</Text>
           </View>
         </View>
         {/* Side details */}
         <View style={{marginLeft:80}}>
           <View>
              <Text style={styles.header}>Vehicle Number:</Text>
              <Text style={styles.subheader}>TN 01 AA 2134</Text>
            </View>
            <View style={{marginTop:10}}>
              <Text style={styles.header}>Parking Place:</Text>
              <Text style={styles.subheader}>2nd floor 07</Text>
            </View>
            <View style={{marginTop:10}}>
               <Text style={styles.header}>Time:</Text>
               <Text style={styles.subheader}>3.00 PM TO 4.00 PM</Text>
           </View>
           <View style={{marginTop:10}}>
               <Text style={styles.header}>Phone Number:</Text>
               <Text style={styles.subheader}>9157867498</Text>
           </View>
         </View>
         </View>
        </View>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btntxt}>Done</Text>
        </TouchableOpacity>
            
       </SafeAreaView>  
    )
}
const styles=StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#000000",
        paddingLeft: 15,
      },
      headerText: {
        color: "white",
        fontSize: 30,
        fontFamily: "Radley",
        marginTop: 20,
        alignSelf: "center",
        marginLeft: 30,
      },
      headerRow: {
        flexDirection: "row",
      },
      roundButton: {
        backgroundColor: "#EAD4B4AB",
        borderRadius: 50,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        marginTop: 20,
        marginLeft: 5,
      },
      ticketcontainer:{
        backgroundColor:"#FFF",
        width:330,
        height:500,
        marginLeft:5,
        marginTop:30,
        borderRadius:30,
        paddingTop:10
      },
      scanText: {
        fontSize: 14,
        color: "#333",
        textAlign: "center",
        marginVertical: 10,
      },
      header:{
        marginLeft:10,
      },
      subheader:{
        marginLeft:10,
        fontWeight:"bold"
      },
      button:{
        marginTop: 30,
        backgroundColor: "#EAD4B4",
        borderRadius: 50,
        width:  240,
        height: 60,
        alignSelf: "center",
      },
      btntxt:{
        fontSize: 28,
        marginTop: 10,
        textAlign: "center",
      }

})
export default ParkingTicket ;