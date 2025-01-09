import Mainpage from './source/mainpage';
import { StatusBar } from 'react-native';
import Mapscreen from './source/mapscreen';
import Headertextcomponent from './component/heading_for_page';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Main' component={Mainpage}></Stack.Screen>
      <Stack.Screen name='map' component={Mapscreen} ></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

