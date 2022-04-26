import { StyleSheet, Text, View,
         Dimensions } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';

const RegisterScreen = () => {
  return (
    <View>
      <Text
        style = {{marginLeft: 18, marginTop: 40}}>RegisterScreen</Text>

      <TextInput placeholder = 'Name' underlineColorAndroid = {'transparent'}
        style = {styles.textInput} />

      <TextInput placeholder = 'Email' underlineColorAndroid = {'transparent'}
        style = {styles.textInput} />

      <TextInput placeholder = 'Password' underlineColorAndroid = {'transparent'} 
        secureTextEntry = {true} style = {styles.textInput} />

      <TextInput placeholder = 'Confirm Password' underlineColorAndroid = {'transparent'}
       style = {styles.textInput} secureTextEntry = {true} />

      <Button mode = 'contained' style = {styles.registerButton}>Register</Button>
    </View>
  )
}

export default RegisterScreen

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 25,
        marginTop: 40,
        marginLeft: 20,
        color: '#fff',
        borderBottomColor: '#552582',
        borderBottomWidth: 1,
        fontSize: 20,
        width: width / 1.3,
    },

    registerButton: {
        width: width / 1.2,
        borderWidth: 1,
        padding: 3,
        marginLeft: 20,
        marginTop: 10,
        fontWeight: 'bold',
      },
})
