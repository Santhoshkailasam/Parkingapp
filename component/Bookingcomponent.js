import React from "react";
import { Text,View,StyleSheet,TouchableOpacity,Image} from "react-native";
import { useFonts } from "expo-font";
const Bookingcomponent = () =>{
  //Import Require Fonts
    const [fontsLoaded] = useFonts({
        Radley: require("../assets/Radley-Regular.ttf"),
        Pompiere: require("../assets/Pompiere-Regular.ttf"),
        Songmyung: require("../assets/SongMyung-Regular.ttf"),
        Sedansc: require("../assets/SedanSC-Regular.ttf"),
        InknutAntiqua: require("../assets/InknutAntiqua-Regular.ttf")
      });
      return(
        <View>
          {/*This is a booking box */}
            <View style={styles.bookingbox}>
              {/*This is a header image box */}
               <View style={styles.headerbox}>
                <View style={{flexDirection:"row"}}>
                  <Image style={styles.image} source={require("../assets/image/tcscarparking.jpeg")}></Image>
                  <Text style={
                    {color:"white",
                    fontSize:19,
                    fontFamily:"InknutAntiqua",
                    marginLeft:15
                     }}>Tech Car Parking</Text>
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
                  <TouchableOpacity style={styles.button}>
                    <Text style={{fontFamily:"Radley"}}>Book Now</Text>
                  </TouchableOpacity>
                </View>
           </View>
        </View>
      )
}
const styles=StyleSheet.create({ 
  image:{
    width:50,
    height:50,
    borderRadius:50,
  },
  headerbox:{
    backgroundColor:"#AFACAC",
    width:320,
    height:70,
    borderRadius:50,
    paddingLeft:20,
    paddingTop:10,
  },
  bookingbox:{
    backgroundColor:"#D6D1CA",
    borderRadius:50,
    width:320,
    height:150,
    marginLeft:20,
    marginTop:10
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
//#AFACAC
//#EAD4B4
//amountand 2.km-sedan sc
//text header-inknut Antiqua
//distance and book-radly
//parking-song myung