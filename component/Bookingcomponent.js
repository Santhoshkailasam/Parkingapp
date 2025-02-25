import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,Image,SafeAreaView} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
const Bookingcomponent = (props) =>{
  //navigation
  const navigation=useNavigation();
  const bookingscreen=()=>{
    navigation.navigate("Bookingscreen")
  }
  //Import Require Fonts
    const [fontsLoaded] = useFonts({
        Radley: require("../fonts/Radley-Regular.ttf"),
        Pompiere: require("../fonts/Pompiere-Regular.ttf"),
        Songmyung: require("../fonts/SongMyung-Regular.ttf"),
        Sedansc: require("../fonts/SedanSC-Regular.ttf"),
        InknutAntiqua: require("../fonts/InknutAntiqua-Regular.ttf")
      });
      return(
        <SafeAreaView>
          {/*This is a booking box */}
            <View style={styles.bookingbox}>
              {/*This is a header image box */}
               <View style={styles.headerbox}>
                <View style={{flexDirection:"row"}}>
                  <Image style={styles.image} source={props.image}></Image>
                  <Text style={ {color:"white",fontSize:14,fontFamily:"InknutAntiqua",marginLeft:15,paddingTop:12,}}>{props.Text}</Text>
                </View>
               </View>
              <View style={{flexDirection:"row"}}>
                 <View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                       <Text style={{color:"white",fontFamily:"Radley",marginLeft:20}}>Distance</Text>
                       <Text style={{color:"white",fontFamily:"Radley",marginLeft:50}}>Price</Text>
                     </View>
                    <View style={{flexDirection:"row",marginTop:10}}>
                      <Text style={{color:"white",marginLeft:20,}}>2.5 KM</Text>
                      <Text style={{color:"white",marginLeft:50}}>₹ 50/Hour</Text>
                    </View>
                  </View>
                   {/*Booking button */}
                  <TouchableOpacity style={styles.button} onPress={bookingscreen}>
                    <Text style={{fontFamily:"Radley"}}>Book Now</Text>
                  </TouchableOpacity>
                </View>
           </View>
        </SafeAreaView>
      )
}
const styles=StyleSheet.create({ 
  image:{
    width:60,
    height:60,
    borderRadius:50,
    marginTop:5,
  },
  headerbox:{
    backgroundColor:"rgba(175, 172, 172, 0.29)",
    width:320,
    height:70,
    borderRadius:50,
    paddingLeft:15,
  },
  bookingbox:{
    backgroundColor:"rgba(214, 209, 202, 0.35)",
    borderRadius:30,
    width:320,
    height:150,
    marginLeft:20,
    marginTop:10,
    opacity:0.90
  },
  button:{
    backgroundColor:"#EAD4B4",
    width:100,
    height:50,
    borderRadius:50,
    paddingLeft:20,
    paddingTop:15,
    marginTop:10,
    marginLeft:25,
  }
})
export default Bookingcomponent;