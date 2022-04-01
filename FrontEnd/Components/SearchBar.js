//Import Statements
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'

function SearchBar(){
  return(
    <View style = {styles.container}>
        <Fontisto name = 'search' size = {20} color = {'#858585'} />
        <Text style = {styles.textSearchBar}>
            Search
        </Text>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E6E6FA',
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 35,
        alignItems: 'center',
        borderRadius: 10 
    },

    searchBar: {
        paddingTop: 10
    },

    textSearchBar: {
        color: "#000000",
        paddingLeft: 10,
        fontSize: 17
    }
})