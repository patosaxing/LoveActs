/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screen Imports
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import ResetPasswordScreen from '../Screens/ResetPasswordScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions = {{headerShown: false}}>
            <Stack.Screen name = "Login" component = {LoginScreen} />
            <Stack.Screen name = "Register" component = {RegisterScreen} />
            <Stack.Screen name = "Confirm Email" component = {ConfirmEmailScreen} />
            <Stack.Screen name = "Forgot Password" component = {ForgotPasswordScreen} />
            <Stack.Screen name = "Reset Password" component = {ResetPasswordScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
