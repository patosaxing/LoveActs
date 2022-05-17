import React from 'react';
import { SafeAreaView, Text, StyleSheet, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';


const LoginScreen = () => {
  return (
    <SafeAreaView style = {styles.content}>
      <View style = {styles.viewStyle}>
        <Card>
          <Card.Title title = "Kingdom Life Victory Church" titleStyle = {styles.cardTitle}></Card.Title>
          <Card.Content>
              <TextInput label = 'Email/Username' keyboardType = 'email-address'></TextInput>
              <TextInput label = 'Password' secureTextEntry = {true}></TextInput>
              <Button uppercase = {false} style = {styles.cardButton}>Forgot Email/Password</Button>
              <Button mode = 'contained' style = {styles.cardButton}>Login</Button>
              <Button>Register</Button>
          </Card.Content>  
        </Card>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    content: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#D3D3D3',
    },

    viewStyle: {
      width: '90%',
    },

    cardTitle: {
      color: 'rgb(101,37,131)',
    },

    cardButton: {
      color: 'rgb(101,37,131)'
    }
})