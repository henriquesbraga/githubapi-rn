import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import DataScreen from './screens/DataScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators  } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () =>{
  return(
  <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS

      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DataScreen" component={DataScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App;
