/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react'
import { View, Image, StyleSheet,
         useWindowDimensions, ScrollView } from 'react-native'
import loginImage from '../../../assets/images/loginImage1.png'
import CustomInput from '../../Components/CustomInput'
import CustomButton from '../../Components/CustomButton/CustomButton'
import SocialButtons from '../../Components/SocialButtons/SocialButtons'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {height} = useWindowDimensions()

    //Defining Function to navigate pages
    const navigation = useNavigation();

    const onLoginPressed = () => {
        console.warn('Log In')

        navigation.navigate('Confirm Email')
    }

    const onForgotPasswordPressed = () => {
        console.warn('Register or Reset Password')
    }

    const onResgister = () => {
        console.warn('Create an Account')

        navigation.navigate('Register')
    }

    return (
        <ScrollView>
            <View>
                <View style = {styles.root}>
                    <Image
                    source = {loginImage}
                    style = {[styles.logo, {height: height * 0.3}]} />
                </View>

                <View>

                <CustomInput
                    placeholder = "Username"
                    value = {userName}
                    setValue = {setUserName}
                />
                <CustomInput
                    placeholder = "Password"
                    value = {password}
                    setValue = {setPassword}
                    secureTextEntry = {true}
                />

                <CustomButton
                    text = "Log In"
                    onPress = {onLoginPressed}
                />
                <CustomButton
                    text = "Forgot Password?"
                    onPress = {onForgotPasswordPressed}
                    type = "TERTIARY"
                />

                <SocialButtons />

                <CustomButton
                    text = "Dont have an account? Create One"
                    onPress = {onResgister}
                    type = "TERTIARY"
                />

                </View>
            </View>
        </ScrollView>
    )
}

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
})

// eslint-disable-next-line eol-last
export default LoginScreen