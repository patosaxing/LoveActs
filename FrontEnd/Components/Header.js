//Import Statement
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

function Header(){
  return(
    <View style = {styles.container}>
        <Entypo name = 'menu' size = {30} color = '#1F51FF' />
        <Entypo name = 'user' size = {27} color = '#1F51FF' />
        <Entypo name = 'new-message' size = {27} color = '#1F51FF' />
        {/* <Text>
            Header
        </Text> */}
    </View> 
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 10
    }
})