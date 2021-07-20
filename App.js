import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DataLoad from './src/screens/DataLoad';
import UserDetails from './src/components/UserDetails';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={DataLoad} />
      <Stack.Screen name="DetailScreen" component={UserDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
