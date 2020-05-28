import React from 'react';
import HomeScreen from './screens/HomeScreen.js';
import DataScreen from './screens/DataScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators  } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
}


const App = () =>{
  return(
  <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="DataScreen" component={DataScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
  
}




export default App;
