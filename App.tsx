import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/views/Home/Home';
import HistoryAttendance from './src/views/HistoryAttendance/HistoryAttendance';
import SignIn from './src/views/SignIn/SignIn';
import Blank from './src/views/Blank/Blank';
import Fingerprint from './src/views/Fingerprint/Fingerprint';
import ForgotPassword from './src/views/ForgotPassword/ForgotPassword';

const Stack = createNativeStackNavigator();

function App({}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HistoryAttendance"
          component={HistoryAttendance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Blank"
          component={Blank}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Fingerprint"
          component={Fingerprint}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
