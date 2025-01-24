import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity,SafeAreaView,ActivityIndicator} from "react-native";
import { useFonts } from "expo-font";
import Goggleicon from "../assets/icon/google.svg"
import Appleicon from "../assets/icon/appleicon.svg"
const Loginscreen=()=>{
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
    
 return(
    <SafeAreaView style={styles.maincontainer}>
        <View>
            <Text style={styles.title}>Create Account</Text>
            <View style={styles.container}>
            <Text style={styles.header}>Name:</Text>
            <TextInput placeholder="Name" selectionColor="grey" style={styles.textinput}/>
            <Text style={styles.header}>Email:</Text>
            <TextInput placeholder="Email" selectionColor="grey" style={styles.textinput}/>
            <Text style={styles.header}>Password:</Text>
            <TextInput placeholder="Password" selectionColor="grey" style={styles.textinput}/>
            <Text style={styles.header}>Confirmpassword:</Text>
            <TextInput placeholder="Confirm Password" selectionColor="grey" style={styles.textinput}/>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Text style={{ color: "#3F372E",fontSize: 16,fontFamily:"Reggae"}}>Sign up</Text>
            </TouchableOpacity>
            <View style={styles.separatorContainer}>
               <View style={styles.separatorLine} />
               <Text style={styles.separatorText}>OR</Text>
               <View style={styles.separatorLine} />
             </View>
             <TouchableOpacity style={styles.socialButton}>
                <View style={{flexDirection:"row"}}>
                <Goggleicon></Goggleicon>
                 <Text style={styles.socialButtonText}>Sign in with Google</Text>
                 </View>
             </TouchableOpacity>
             <TouchableOpacity style={styles.socialButton}>
                <View style={{flexDirection:"row"}}>
                <Appleicon></Appleicon>
                  <Text style={styles.socialButtonText}>Sign in with Apple</Text>
                  </View>
              </TouchableOpacity>
             </View>
             </SafeAreaView>
 )
}
const styles=StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor: "#3F372E",
    },
    title: {
        fontSize: 24,
        color: "#FFF",
        fontWeight: "bold",
        marginLeft:100,
        marginTop:5,
      },
      container:{
            marginTop:30
      },
      header:{
        color:"white",
        marginLeft:57,
        fontSize:18,
        fontWeight:"bold",
        paddingBottom:10
      },
      textinput:{
        width: "70%",
        height: 60,
        backgroundColor: "#766E60",
        borderRadius: 25,
        paddingLeft: 15,
        marginBottom: 20,
        color: "#FFF",
        fontSize: 16,
        marginLeft:50,
        fontSize:20,
        borderColor:"white",
        borderWidth:1,
        fontFamily:"Rakkass"
      },
      btn:{
        width: "40%",
        height: 50,
        backgroundColor: "#EAD4B4",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginLeft:100
      },
      separatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        marginVertical: 20,
      },
      separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: "white",
        marginLeft:5
      },
      separatorText: {
        marginLeft:5,
        color: "#FFF",
        fontSize: 14,
      },
      socialButton: {
        width: "80%",
        height: 50,
        backgroundColor: "#EAD4B4",
        borderRadius: 25,
        justifyContent: "center",
        paddingLeft:15,
        marginBottom: 15,
        marginLeft:35
      },
      socialButtonText: {
        fontSize: 16,
        fontFamily:"Reggae",
        marginTop:10,
        marginLeft:10
      },
})
export default Loginscreen;
