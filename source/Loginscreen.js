import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity,SafeAreaView} from "react-native";
const Loginscreen=()=>{
 return(
    <SafeAreaView style={styles.maincontainer}>
        <View>
            <Text style={styles.title}>Create Account</Text>
            <View style={styles.container}>
            <Text style={styles.header}>Name:</Text>
            <TextInput placeholder="Enter your name" style={styles.textinput}/>
            <Text style={styles.header}>Email:</Text>
            <TextInput placeholder="Enter your Email" style={styles.textinput}/>
            <Text style={styles.header}>Password:</Text>
            <TextInput placeholder="Enter your Password" style={styles.textinput}/>
            <Text style={styles.header}>Confirmpassword:</Text>
            <TextInput placeholder="Enter your Confirm Password" style={styles.textinput}/>
            </View>
            <TouchableOpacity>
                <Text>Sign up</Text>
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
        marginTop:30
      },
      header:{

      },
      textinput:{
        width: "70%",
        height: 50,
        backgroundColor: "#766E60",
        borderRadius: 25,
        paddingLeft: 15,
        marginBottom: 20,
        color: "#FFF",
        fontSize: 16,
      }
})   
export default Loginscreen;