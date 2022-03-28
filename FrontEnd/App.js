//Import Statements
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home'
// import Home from './Components/Home'


const Stack = createStackNavigator();

export default function App() {
  return (
    <Home />
    // <NavigationContainer>
    //     <Stack.Navigator initialRouteName = 'Landing'>
    //       <Stack.Screen name = 'Landing' component = {Home}
    //         options = {{ headerShown: false }} />
    //     </Stack.Navigator>
    // </NavigationContainer>
    // <View style={styles.container}>
    //   <Text>Reach Love Impact!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
