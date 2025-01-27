import Mainpage from './source/mainpage';
import React, { useState, useEffect } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import Mapscreen from './source/mapscreen';
import Headertextcomponent from './component/heading_for_page';
import Bookingcomponent from './component/Bookingcomponent';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NearbyParking from './source/parkingsaroundyou';
import FooterComponent from './component/footercomponent';
import Registerscreen from './source/Registerscreen';
import Loginscreen from './source/Loginscreen';
import ProfileScreen from './source/ProfileScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Registerscreen" component={ProfileScreen }></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
