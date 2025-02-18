import React, { useState, useEffect } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mainpage from './source/mainpage';
import Mapscreen from './source/mapscreen';
import Loginscreen from './source/Loginscreen';
import Registerscreen from './source/Registerscreen';
import FooterComponent from './component/footercomponent';
import Payment from './source/Payments';
import Forgetpassword from './source/forgetpasswordscreen';
import Bookingscreen from './source/Booking screen';
import Circlecomponent from './component/circle component';
import Finalbooking from './source/FinalBooking';
export default function App() {
  const [aspectRatio, setAspectRatio] = useState(
    Dimensions.get('window').height / Dimensions.get('window').width
  );

  useEffect(() => {
    const onChange = ({ window }) => {
      setAspectRatio(window.height / window.width);
    };

    // Correct way to listen for dimension changes
    const subscription = Dimensions.addEventListener('change', onChange);

    // Cleanup listener properly
    return () => subscription?.remove();
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
            name="FinalBooking"  
            component={(props) => <Finalbooking {...props} aspectRatio={aspectRatio} />} 
          />
        <Stack.Screen 
            name="Bookingscreen"  
            component={(props) => <Bookingscreen {...props} aspectRatio={aspectRatio} />} 
          />
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
            name="Forgetpassword"  
            component={(props) => <Forgetpassword {...props} aspectRatio={aspectRatio} />} 
          />
          <Stack.Screen 
            name="Footerpage"  
            component={(props) => <FooterComponent {...props} aspectRatio={aspectRatio} />} 
          />
          <Stack.Screen 
            name="Paymentpage"  
            component={(props) => <Payment {...props} aspectRatio={aspectRatio} />} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
