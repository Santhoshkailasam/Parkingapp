import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, ActivityIndicator,SafeAreaView,TextInput} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Back from "../assets/icon/back.svg";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
const Finalbooking =()=>{
    const navigation=useNavigation()
    const [selectedValue, setSelectedValue] = useState("");
    //fonts 
    const [fontsLoaded] = useFonts({
        Reggae: require("../fonts/ReggaeOne-Regular.ttf"),
        Songmyung: require("../fonts/SongMyung-Regular.ttf"),
        Rakkas: require("../fonts/Rakkas-Regular.ttf")
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
        {/* Header */}
        <View style={styles.changetorow} >
        <TouchableOpacity style={styles.roundButton} onPress={()=>navigation.goBack()}>
          <Back />
        </TouchableOpacity>
            <Text style={styles.header}>Add Details</Text>
        </View>

        {/* Forms */}

        {/* Name */}
            <Text style={styles.subheader}>Full Name</Text>
            <TextInput style={styles.inputbox} placeholder="Enter your Full Name" placeholderTextColor={"#4f4a46"} />
            
            {/* Vehicle number */}
            <Text style={styles.subheader}>Vehicle Number</Text>
            <TextInput style={styles.inputbox} placeholder="TN 01 AA XXXX" placeholderTextColor={"#4f4a46"} /><View>

            {/* Phone number */}
            <Text style={styles.subheader}>Phone Number</Text>
            <View style={styles.dropdownContainer}>
                {/* Dropdown (Picker) */}
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                    <Picker.Item label="+91 (India  🇮🇳 )" value="+91" />
                    <Picker.Item label="+1 (USA  🇺🇸 )" value="+1" />
                    <Picker.Item label="+44 (UK  🇬🇧)" value="+44" />
                </Picker>
                {/* phone number */}
            <TextInput style={{fontSize:18,flex:1,position:"absolute",left:70}}  placeholder="983200XXXX" placeholderTextColor={"#4f4a46"} keyboardType="phone-pad" />
            </View>
        </View>
       {/* Details */}
        <View style={styles.detailsbox}>
            <Text style={styles.detailsheader}>Amount</Text>
            <View style={[styles.changetorow,styles.detailstext,{justifyContent:'space-between',width:210}]}>
                <Text style={[styles.detailsfont,{fontFamily:"Songmyung"}]}>₹/Hour</Text>
                <Text style={[styles.detailsfont,{fontFamily:"Songmyung"}]}>₹20</Text>
            </View>

            <View style={[styles.changetorow,styles.detailstext,{justifyContent:'space-between',width:240}]}>
               <Text style={[styles.detailsfont,{fontFamily:"Songmyung"}]}>Hour</Text>
               <Text style={[styles.detailsfont,{fontFamily:"Songmyung"}]}>4 Hour</Text>
            </View>

            <View style={[styles.changetorow,styles.detailstext,{justifyContent:'space-between',width:285}]}>
                <Text style={[styles.detailsfont,{fontFamily:"Songmyung"}]}>Place Booked</Text>
                <Text style={[styles.detailsfont,{fontFamily:"Songmyung"}]}>2nd Floor-07</Text>
            </View>

            <View style={{backgroundColor:"#000000",height:1,marginTop:20}}></View>

            <View style={[styles.changetorow,styles.detailstext,{justifyContent:'space-between',width:220}]}>
                <Text style={[styles.detailsfont,{fontFamily:"Rakkas"}]}>Total Amount</Text>
                <Text style={[styles.detailsfont,{fontFamily:"Rakkas"}]}>₹80</Text>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text  style={[styles.btntext,{fontFamily:"Reggae"}]}>Next</Text>
            </TouchableOpacity>
           </View>
     </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#000000",
        paddingLeft: 15,
      },
      roundButton: {
        backgroundColor: "#EAD4B4AB",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        marginTop: 20,
      },
      header:{
        color:"#FFFFFF",
        alignSelf:"center",
        paddingLeft:70,
        fontSize:22,
        margintop:10,
        fontFamily:"Reggae"
      },
      changetorow:{
        flexDirection:"row"
      },
      subheader:{
        color:"#FFFFFF",
        fontSize:20,
        marginTop:10,
        marginLeft:20,
        fontFamily:"Reggae"
    },
    inputbox:{
        borderColor:"#FFFFFF",
        borderWidth:2,
        width: "85%",
        borderRadius:30,
        height:60,
        marginLeft:10,
        marginTop:10,
        fontSize:18,
        alignItems:"center",
        paddingLeft:50

    },
    dropdownContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: "#FFFFFF",
        borderWidth: 2,
        borderRadius: 30,
        width: "85%",
        height: 60,
        marginLeft: 10,
        marginTop: 10,
        backgroundColor: "#1E1E1E",
    },
    picker: {
        width: "42%", 
        color: "#FFFFFF",
    },
    detailsbox:{
        backgroundColor:"#FFFFFF",
        marginTop:30,
        borderRadius:30,
        width:330,
        height:330
    },
    detailsheader:{
       fontSize:25,
       marginLeft:15,
       marginTop:15,
       fontFamily:"Reggae"
    },
    detailstext:{
       marginLeft:15,
       marginTop:15,
       fontFamily:"Songmyung"
    },
    detailsfont:{
       fontSize:20
    },
    btn:{
        marginTop: 30,
        backgroundColor: "#EAD4B4",
        borderRadius: 50,
        width:  240,
        height: 60,
        alignSelf: "center",
    },
    btntext:{
        fontSize: 28,
        marginTop: 10,
        textAlign: "center",
    }
})
export default Finalbooking; 