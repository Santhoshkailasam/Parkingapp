import Mainpage from './source/mainpage';
import React, { useState, useEffect } from 'react';
import { StatusBar,Dimensions} from 'react-native';
import Mapscreen from './source/mapscreen';
import Headertextcomponent from './component/heading_for_page';
import Bookingcomponent from './component/Bookingcomponent';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NearbyParking from './source/parkingsaroundyou';
import FooterComponent from './component/footercomponent';
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
        <FooterComponent></FooterComponent>
      </NavigationContainer>
    </>
  );
}

