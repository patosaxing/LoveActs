import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button } from 'react-native-paper';

const LoginScreen = () => {
  return (
    <View style = {styles.container}>
        <Text
          style = {{fontSize : 45, marginLeft : 18, color : '#524F81',
                    justifyContent : 'center'}} >
          Kingdom Life{'\n'}Victory Church 
        </Text>
    <View>
        <TextInput style = {styles.emailInput} placeholder = 'Email' />
        <TextInput style = {styles.passwordInput} placeholder = 'Password' />
    </View>
    </View>
  )
}

export default LoginScreen

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  emailInput: {
    borderColor: '#552582',
    borderWidth: 1,
    width: width / 1.3,
    padding: 10,
    marginLeft : 20,
    marginTop : 30,
  },

  passwordInput: {
    borderColor: '#552582',
    borderWidth: 1,
    width: width / 1.3,
    padding: 10,
    marginLeft: 20,
    marginTop: 10 
  }
})