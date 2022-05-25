import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({value, setValue, placeholder, secureTextEntry, label}) => {
  return (
    <View>
      
      {label && <Text>{label}</Text>}
      
        <TextInput 
            value = {value}
            onChangeText = {setValue}
            placeholder = {placeholder}
            style = {styles.input}
            secureTextEntry = {secureTextEntry} 
        />
    </View>
  )
};

export default CustomInput

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#D3D3D3',
      width: '100%',

      borderColor: '#E8E8E8',
      borderWidth: 1,
      borderRadius: 5,

      paddingHorizontal: 10,
      marginVertical: 5,
  },
  input: {
    marginTop: 50
  },
})