import React, { useState } from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
const  Timeline=(props)=>{
return(
    <View>
       <View style={{flexDirection:'row'}}>
        <TouchableOpacity>
       <View style={styles.timeline}></View>
       </TouchableOpacity>
       <TouchableOpacity>
       <View style={styles.smallline}></View>
       </TouchableOpacity>
       <TouchableOpacity>
       <View style={styles.mediumline}></View>
       </TouchableOpacity>
       <TouchableOpacity>
        <View style={styles.smallline}></View>
       </TouchableOpacity>
    </View>
     <View style={{flexDirection:"row"}}>
        <TouchableOpacity>
        <Text style={styles.time}>{props.time}</Text>
        </TouchableOpacity>
     </View>
     </View>  
)}
const styles=StyleSheet.create({
    timeline:{
        backgroundColor:"#FFFFFF",
        height:90,
        width:3,
        marginLeft:20,
      },
      smallline:{
        backgroundColor:"#FFFFFF",
        height:30,
        width:3,
        marginLeft:20
      },
      mediumline:{
        backgroundColor:"#FFFFFF",
        height:50,
        width:3,
        marginLeft:20
      },
      time:{
        color:"#FFFFFF",
        fontSize:12
      }
})
export default Timeline;