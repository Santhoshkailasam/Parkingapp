import Mainpage from './source/mainpage';
import { StatusBar } from 'react-native';
import Mapscreen from './source/mapscreen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function App() {
  const Stack=createNativeStackNavigator()
  return (
    <>
      <StatusBar hidden={false} />
      <NavigationContainer>
        <Stack.Navigator >
        <Stack.Screen name='Main' component={Mainpage} options={{headerShown:false,}}></Stack.Screen>
      <Stack.Screen name='map' component={Mapscreen} options={{headerShown:false}}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

