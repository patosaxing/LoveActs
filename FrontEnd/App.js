//Import Statements
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image,
          Text, View, SafeAreaView } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Onboarding1 from './src/Screens/Onboarding1';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen/RegisterScreen';


export default function App() {
  return (
    <PaperProvider style = {styles.colors}>
      {/* <Onboarding1/> */}
      {/* <LoginScreen/> */}
      <RegisterScreen/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'rgb(101,37,131)',
      background: 'transparent',
    }
});
