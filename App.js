import React, { useState, useEffect } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainpage from './source/mainpage';
import Mapscreen from './source/mapscreen';
import Headertextcomponent from './component/heading_for_page';
import NearbyParking from './source/parkingsaroundyou';
import FooterComponent from './component/footercomponent';
import Registerscreen from './source/Registerscreen';
import Loginscreen from './source/Loginscreen';
import ProfileScreen from './source/ProfileScreen';
export default function App() {
  const [aspectRatio, setAspectRatio] = useState(Dimensions.get('window').height / Dimensions.get('window').width);

  useEffect(() => {
    const onChange = ({ window }) => {
      setAspectRatio(window.height / window.width);
    };

    // Adding listener for screen dimension changes
    Dimensions.addEventListener('change', onChange);

    // Cleanup listener on component unmount
    return () => Dimensions.removeEventListener('change', onChange);
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen 
            name="Mainpage"  
            component={(props) => <Mainpage {...props} aspectRatio={aspectRatio} />} 
          />
          <Stack.Screen 
            name="Map" 
            component={(props) => <Mapscreen {...props} aspectRatio={aspectRatio} />} 
          />
           <Stack.Screen 
            name="Loginpage"  
            component={(props) => <Loginscreen {...props} aspectRatio={aspectRatio} />} 
          />
           <Stack.Screen 
            name="Registerpage"  
            component={(props) => <Registerscreen {...props} aspectRatio={aspectRatio} />} 
          />
           <Stack.Screen 
            name="Footerpage"  
            component={(props) => <FooterComponent {...props} aspectRatio={aspectRatio} />} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
