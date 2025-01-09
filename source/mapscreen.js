import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, Platform, View, PermissionsAndroid } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const Mapscreen = () => {
  // Use for navigation
  const navigation = useNavigation();

  // State to hold the dynamic marker details
  const [marker, setMarker] = useState(null);

  // Handle the permission
  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Location permission granted');
        } else {
          Alert.alert(
            'Permission Denied',
            'Location permission is required to show your current location on the map.',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      console.log('Location permission not required for iOS');
    }
  };

  // Request location permission
  useEffect(() => {
    requestLocationPermission();
  }, []);

  // Handle map press to add a marker
  const handleMapPress = (event) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setMarker({
      latitude,
      longitude,
      title: 'Karapakkam',
      description: 'Karapakkam, Sozhinganallur, Chennai - 600097',
    });
  };
 const markernextpage=()=>{
  navigation.navigate("Main")
 }
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 12.9032844, // Your location latitude
          longitude: 80.2279555, // Your location longitude
          latitudeDelta: 0.0922, // Zoom level for latitude
          longitudeDelta: 0.0421, // Zoom level for longitude
        }}
        showsUserLocation={true}
        showsMyLocationButton={true}
        onPress={handleMapPress} // Add marker on map press
      >
        {/* Display marker dynamically if it exists */}
        {marker && (
          <Marker
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            title={marker.title} // Dynamic title
            description={marker.description} // Dynamic description
            onPress={markernextpage}
          />
        )}
      </MapView>
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
