/* eslint-disable prettier/prettier */
import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, text, type = 'PRIMARY', bgColor, fgColor}) => {
  return (
    <Pressable
        onPress = {onPress}
        style = {[styles.container,
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {},
    ]}>

    <Text
        style = {[styles.text,
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {},
        ]}>
        {text}
    </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5D3FD3',

        width: 380,

        padding: 15,
        borderRadius: 5,

        marginLeft: 20,
        marginVertical: 5,

        alignItems: 'center',
    },

    container_PRIMARY: {
        backgroundColor: '#5D3FD3',
    },

    container_TERTIARY: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
    },

    container_SECONDARY: {
        backgroundColor: '#FFFFFF',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
    },

    text_SECONDARY: {
        color: '#5D3FD3',
    },

    text:{
        fontWeight: 'bold',
        color: 'black',
        fontSize: 15,
    },
});

export default CustomButton;
