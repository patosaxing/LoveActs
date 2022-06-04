/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton/CustomButton';

const SocialButtons = () => {
    const onLoginFacebook = () => {
        console.warn('Facebook Login');
    };

    const onLoginGoogle = () => {
        console.warn('Google Login');
    };

    return (
        <View>
            <CustomButton
                text = "Sign In with Facebook"
                onPress = {onLoginFacebook}
                bgColor = "#E7EAF4"
                fgColor = "#4765A9"
            />
            <CustomButton
                text = "Sign In with Google"
                onPress = {onLoginGoogle}
                bgColor = "#FAE9EA"
                fgColor = "#DD4D44"
            />
        </View>
    );
    };

export default SocialButtons;
