import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DataLoad from './src/screens/DataLoad';
import UserDetails from './src/screens/UserDetails';
import Login from './src/screens/SignIn';
import Signup from './src/screens/Signup';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="HomeScreen" component={DataLoad} />
      <Stack.Screen name="DetailScreen" component={UserDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
