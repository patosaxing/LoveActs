/* eslint-disable prettier/prettier */
import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style = {styles.container}>
      <TextInput
        value = {value}
        onChangeText = {setValue}
        placeholder = {placeholder}
        style = {styles.input}
        secureTextEntry = {secureTextEntry}
       />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 380,
        height: 44,

        borderColor: '#5D3FD3',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginLeft: 20,
        marginVertical: 5,
    },
    input: {},
});

export default CustomInput;
