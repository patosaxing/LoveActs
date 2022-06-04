/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

//Import Statements
import React, {useState} from 'react'
import { View, StyleSheet, Text,
         ScrollView } from 'react-native'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'


const ForgotPasswordScreen = () => {
   const [newPassword, setNewPassword] = useState('');
   const [reEnterPassword, setreEnterPassword] = useState('');

    //Functions for Error warnings
    const onSubmitPressed = () => {
        console.warn('Enter your Password')
    }

        const onLoginPressed = () => {
        console.warn('Back to Login')
    }

    return (
        <ScrollView>
            <View>
                <View style = {styles.root}>
                    <Text style = {styles.title}>Reset your Password</Text>
                </View>

                <View>

                {/* Textboxes for Inputs like Email, Username etc */}
                <CustomInput
                    placeholder = "Enter your New Password"
                    value = {newPassword}
                    setValue = {setNewPassword}
                />

                <CustomInput
                    placeholder = "Re-Enter your Password"
                    value = {reEnterPassword}
                    setValue = {setreEnterPassword}
                />

                {/* Buttons to Register Inputs like Email, Username etc */}
                <CustomButton
                    text = "Submit"
                    onPress = {onSubmitPressed}
                />

                <CustomButton
                    text = "Back to Log In"
                    onPress = {onLoginPressed}
                    type = "TERTIARY"
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
export default ForgotPasswordScreen