import React from 'react';
import { View, Text, StyleSheet,
    TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const items = [
    {
        id: 1,
        name: 'video-camera',
        title: 'New Service'
    },

    {
        id: 2,
        name: 'plus-square',
        title: 'Join'
    },

    {
        id: 3,
        name: 'calender',
        title: 'Book Service'
    },

    {
        id: 4,
        name: 'upload',
        title: 'Share Screen'
    }
]

function MenuButtons(){
  return(
     <View style = {styles.container}>
         {/* One Button */}
         {items.map((item, index) =>
            <View style = {styles.buttonContainer}>
                <TouchableOpacity
                    style = {styles.button}>
                    <FontAwesome name = {item.name} size = {35}
                    color = {'#EFEFEF'} />
                </TouchableOpacity>
                <Text style = {styles.menuText}>{item.title}</Text>
            </View>
         )}
     </View>
  )
}

export default MenuButtons

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        paddingBottom: 10
    },

    buttonContainer:{
        // alignItems: 'center'
    },

    button: {
        width: 50,
        height: 50,
        backgroundColor: '#1F51FF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    menuText: {
        color: '#000000',
        fontSize: 15,
        fontWeight: '600'
     }
})