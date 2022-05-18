import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { LoginScreenStyle } from './LoginScreen.style'


const LoginScreen = () => {
  return (
    <SafeAreaView style = {LoginScreenStyle.Content}>
      <View style = {LoginScreenStyle.viewStyle}>
        <Card>
          <Card.Title title = "Kingdom Life Victory Church" titleStyle = {LoginScreenStyle.cardTitle}></Card.Title>
          <Card.Content>
              <TextInput label = 'Email/Username' keyboardType = 'email-address'></TextInput>
              <TextInput label = 'Password' secureTextEntry = {true}></TextInput>
              <Button uppercase = {false} style = {LoginScreenStyle.cardButton}>Forgot Email/Password</Button>
              <Button mode = 'contained' style = {LoginScreenStyle.cardButton}>Login</Button>
              <Button>Register</Button>
          </Card.Content>  
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen;