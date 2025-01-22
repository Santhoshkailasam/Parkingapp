import Mainpage from './source/mainpage';
import React, { useState, useEffect } from 'react';
import { StatusBar,Dimensions} from 'react-native';
import Mapscreen from './source/mapscreen';
import Headertextcomponent from './component/heading_for_page';
import Bookingcomponent from './component/Bookingcomponent';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NearbyParking from './source/parkingsaroundyou';
export default function App() {
  const [aspectRatio, setAspectRatio] = useState(Dimensions.get('window').height / Dimensions.get('window').width);

  useEffect(() => {
    const onChange = ({ window }) => {
      setAspectRatio(window.height / window.width);
    };

    Dimensions.addEventListener('change', onChange);
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);
  const Stack=createNativeStackNavigator()
  return (
    <>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Nearbyparking'  component={(props) => <NearbyParking {...props} aspectRatio={aspectRatio}/>}></Stack.Screen>
        <Stack.Screen name='Booking'  component={(props) => <Bookingcomponent {...props} aspectRatio={aspectRatio}/>}></Stack.Screen>
        <Stack.Screen name='Header'  component={(props) => <Headertextcomponent {...props} aspectRatio={aspectRatio}/>}></Stack.Screen>
        <Stack.Screen name='Main'  component={(props) => <Mainpage {...props} aspectRatio={aspectRatio}/>}></Stack.Screen>
      <Stack.Screen name='Map' component={(props) => <Mapscreen {...props} aspectRatio={aspectRatio}/>}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

