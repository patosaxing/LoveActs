/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */

//Import Statements
import React, {useState} from 'react'
import { View, Image, StyleSheet, Text,
         ScrollView } from 'react-native'
import getStarted from '../../../assets/images/getStarted.png'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import SocialButtons from '../../Components/SocialButtons/SocialButtons'
import { useNavigation } from '@react-navigation/native'


const RegisterScreen = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const navigation = useNavigation()

    //Functions for Error warnings
    const onRegisterPressed = () => {
        console.warn('Register')
    }

    const onTermsOfUsePressed = () => {
        console.warn('Read the Terms of Use')
    }

    const onPrivacyPolicyPressed = () => {
        console.warn('Read the Privacy Policy')
    }

    const onResgister = () => {
        console.warn('Create an Account')

        navigation.navigate('Login')
    }

    return (
        <ScrollView>
            <View>
                <View style = {styles.root}>
                    {/* <Image
                    source = {getStarted}
                    style = {[styles.logo, {height: height * 0.3}]} /> */}
                    <Text style = {styles.title}>Create an Account</Text>
                </View>

                <View>

                {/* Textboxes for Inputs like Email, Username etc */}
                <CustomInput
                    placeholder = "Username"
                    value = {userName}
                    setValue = {setUserName}
                />
                <CustomInput
                    placeholder = "Email"
                    value = {email}
                    setValue = {setEmail}
                />
                <CustomInput
                    placeholder = "Password"
                    value = {password}
                    setValue = {setPassword}
                    secureTextEntry = {true}
                />
                <CustomInput
                    placeholder = "First Name"
                    value = {firstName}
                    setValue = {setFirstName}
                />
                <CustomInput
                    placeholder = "Last Name"
                    value = {lastName}
                    setValue = {setLastName}
                />

                {/* Buttons to Register Inputs like Email, Username etc */}
                <CustomButton
                    text = "Register"
                    onPress = {onRegisterPressed}
                />
                <Text style = {styles.text}>
                    By registering, you confirm that you accept our{' '}
                    <Text style = {styles.link} onPress = {onTermsOfUsePressed}>Terms of Use</Text> and
                    <Text style = {styles.link} onPress = {onPrivacyPolicyPressed}>{' '}Privacy Policy</Text>
                </Text>

                <SocialButtons />

                <CustomButton
                    text = "Already a Member? Log In"
                    onPress = {onResgister}
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
export default RegisterScreen