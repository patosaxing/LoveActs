import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native';
import { Button, Card } from 'react-native-paper';
import axios from 'axios';

const LoginScreen = () => {
  //const [hidePassword, setHidePassword] = useState(true)

  

  return (
    <View style = {styles.container}>
      <Card>
        <Text
          style = {{fontSize : 45, marginLeft : 18, color : '#524F81',
                    justifyContent : 'center'}} >
          Kingdom Life{'\n'}Victory Church 
        </Text>
    <View>
        <TextInput style = {styles.emailInput} placeholder = 'Email'
                   keyboardType = 'email-address' />
        <TextInput style = {styles.passwordInput} placeholder = 'Password'
                   secureTextEntry = {true} />

        <Button mode = 'contained' style = {styles.loginButton}>Log In</Button>
        <Button uppercase = {false} style = {styles.forgotButton}>
          Forgot Email/Password
        </Button>
        <Button uppercase = {false} style = {styles.registerButton}>
          Register
        </Button>
    </View>
    </Card>
    </View>
  )
}

export default LoginScreen

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#C0C0C0',
  },

  emailInput: {
    borderColor: '#552582',
    borderWidth: 1,
    width: width / 1.3,
    padding: 10,
    marginLeft : 20,
    marginTop : 30,
    fontSize: 20,
  },

  passwordInput: {
    borderColor: '#552582',
    borderWidth: 1,
    width: width / 1.3,
    padding: 10,
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20, 
  },

  loginButton: {
    width: width / 1.3,
    borderWidth: 1,
    padding: 3,
    marginLeft: 20,
    marginTop: 10,
  },

  forgotButton: {
    alignItems: 'flex-start'
  },

  registerButton: {
    alignItems: 'flex-start'
  }
})