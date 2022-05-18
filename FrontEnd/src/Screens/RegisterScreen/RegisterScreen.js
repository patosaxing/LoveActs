import React from 'react';
import { View, Text, SafeAreaView,
        ScrollView } from 'react-native';
import { Appbar, Button, TextInput } from 'react-native-paper';
import registerScreenStyle from './RegisterScreen.style';
import HeaderComponent from '../../Components/HeaderComponent';


const RegisterScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView>
           <HeaderComponent title = 'Register' />
            <View style = {registerScreenStyle.content}>
                <TextInput label = 'Name' />
                <TextInput label = 'Username' />
                <TextInput label = 'Email' keyboardType = 'email-address' />
                <TextInput label = 'Password' secureTextEntry = {true}
                    right = {<TextInput.Icon name = 'eye-off-outline' />} />
                <TextInput label = 'Confirm Password' secureTextEntry = {true}
                    right = {<TextInput.Icon name = 'eye-off-outline' />} />
                <TextInput label = 'Phone Number' keyboardType = 'phone-pad' />
                <Button mode = 'contained' style = {registerScreenStyle.button}>Register</Button>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default RegisterScreen;