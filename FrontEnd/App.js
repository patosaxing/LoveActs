//Import Statements
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home'
import LoginScreen from './Screens/LoginScreen';
// import Home from './Components/Home'


const Stack = createStackNavigator();

export default function App() {
  return (
    //<Home />
    <LoginScreen />
    // <NavigationContainer>
    //   <Stack.Navigator>
    //       <Stack.Screen name = 'Home' component = {Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
