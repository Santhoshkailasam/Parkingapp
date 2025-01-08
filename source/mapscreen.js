import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
const Mapscreen = () => {
  const navigation=useNavigation()
  const  Search=()=>{
    navigation.navigate("Main")
  }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825, // Default latitude
          longitude: -122.4324, // Default longitude
          latitudeDelta: 0.0922, // Zoom level for latitude
          longitudeDelta: 0.0421, // Zoom level for longitude
        }} 
        onPress={Search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject, // Make the map fill the entire container
  },
});

export default Mapscreen;
