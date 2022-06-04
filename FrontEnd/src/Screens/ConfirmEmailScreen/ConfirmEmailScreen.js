/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

//Import Statements
import React, {useState} from 'react'
import { View, StyleSheet, Text,
         ScrollView } from 'react-native'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native'


const ConfirmEmailScreen = () => {
   const [code, setCode] = useState('');

   const navigation = useNavigation();

    //Functions for Error warnings
    const onConfirmPressed = () => {
        console.warn('Confirm your Code')
    }

    const onResendPressed = () => {
        console.warn('Resend Code??')
    }

    const onLoginPressed = () => {
        console.warn('Back to Login')

        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <View>
                <View style = {styles.root}>
                    <Text style = {styles.title}>Confirm your Email</Text>
                </View>

                <View>

                {/* Textboxes for Inputs like Email, Username etc */}
                <CustomInput
                    placeholder = "Enter your Confirmation Code"
                    value = {code}
                    setValue = {setCode}
                />

                {/* Buttons to Register Inputs like Email, Username etc */}
                <CustomButton
                    text = "Confirm"
                    onPress = {onConfirmPressed}
                />

                <CustomButton
                    text = "Back to Log In"
                    onPress = {onLoginPressed}
                    type = "TERTIARY"
                />

                <CustomButton
                    text = "Resend Code"
                    onPress = {onResendPressed}
                    type = "SECONDARY"
                />

                </View>
            </View>
        </ScrollView>
    )
}

/*Stylesheet function for Register Page */
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 18,
    },
    logo: {
        width: 350,
        maxWidth: 300,
        maxHeight: 220,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5D3FD3',
        margin: 10,
    },
    text: {
        marginLeft: 20,
        color: 'gray',
    },
    link: {
        color: '#FDB075',
    },
})

// eslint-disable-next-line eol-last
export default ConfirmEmailScreen