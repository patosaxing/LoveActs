import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import LoginScreenStyle from './LoginScreenStyle';
import CustomInput from '../../Components/CustomInput';

const LoginScreen = () => {
    const [value, onChangeText] = useState('');

    return(
        <View style = {LoginScreenStyle.container}>
            <CustomInput 
                label = 'Username/Email' 
                onChangeText = {(text) => onChangeText(text)}
                value = {value}
            />
        </View>
    )
}

export default LoginScreen;