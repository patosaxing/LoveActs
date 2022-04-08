import React from 'react';
import { View, Text, StyleSheet,
    TouchableOpacity, Dimensions, 
    FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

//Array of icons
// const iconItems = [
//     {
//         id: 1,
//         name: 'video-vintage',
//         title: 'New Service',
//         customColor: '#7393B3'
//     },

//     {
//         id: 2,
//         name: 'plus-box',
//         title: 'Join'
//     },

//     {
//         id: 3,
//         name: 'calendar-month',
//         title: 'Set Service'
//     },

//     {
//         id: 4,
//         name: 'upload-network',
//         title: 'Share Screen'
//     },

//     {
//         id: 5,
//         name:'book-open-page-variant',
//         title: 'Bible Bookmarks'
//     },

//     {
//         id: 6,
//         name: 'account-group',
//         title: 'Discipleship'
//     }
//  ]

 //const numColumns = 4;

function MenuButtons(){
  return(
    <View>
        <View style = {styles.container}>
            <View>
                <TouchableOpacity style = {styles.buttonContainer} >
                    <MaterialCommunityIcon name = {'video-vintage'} size = {40}
                        color = {'#EFEFEF'} />
                </TouchableOpacity>
                    <Text style= {styles.menuText} >New Service</Text>
        </View>

        <View>
            <TouchableOpacity style = {styles.buttonContainer}>
                    <MaterialCommunityIcon name = {'plus-box'} size = {40}
                        color = {'#EFEFEF'} />
            </TouchableOpacity>
                    <Text style= {styles.menuText} >Join</Text>
        </View>

        <View>
            <TouchableOpacity style = {styles.buttonContainer}>
                    <MaterialCommunityIcon name = {'calendar-month'} size = {40}
                        color = {'#EFEFEF'} />
            </TouchableOpacity>
                    <Text style= {styles.menuText} >Set Service</Text>
        </View>

        <View>
            <TouchableOpacity style = {styles.buttonContainer}>
                    <MaterialCommunityIcon name = {'upload-network'} size = {40}
                        color = {'#EFEFEF'} />
            </TouchableOpacity>
                    <Text style= {styles.menuText} >Share Screen</Text>
        </View>
    </View>

    <View style = {styles.container}>
        <View>
                <TouchableOpacity style = {styles.buttonContainer} >
                    <MaterialCommunityIcon name = {'book-open-page-variant'} size = {40}
                        color = {'#EFEFEF'} />
                </TouchableOpacity>
                    <Text style= {styles.menuText} >Bible Bookmarks</Text>
        </View>

        <View>
            <TouchableOpacity style = {styles.buttonContainer}>
                    <MaterialCommunityIcon name = {'account-group'} size = {40}
                        color = {'#EFEFEF'} />
            </TouchableOpacity>
                    <Text style= {styles.menuText} >Discipleship</Text>
        </View>

        <View>
            <TouchableOpacity style = {styles.buttonContainer}>
                    <MaterialCommunityIcon name = {'calendar-month'} size = {40}
                        color = {'#EFEFEF'} />
            </TouchableOpacity>
                    <Text style= {styles.menuText} >Set Service</Text>
        </View>

        <View>
            <TouchableOpacity style = {styles.buttonContainer}>
                    <MaterialCommunityIcon name = {'upload-network'} size = {40}
                        color = {'#EFEFEF'} />
            </TouchableOpacity>
                    <Text style= {styles.menuText} >Share Screen</Text>
        </View>
     </View>
     </View>
  )
}

export default MenuButtons

const styles = StyleSheet.create({

    container: {
        paddingTop: 80,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    buttonContainer: {
        backgroundColor: '#1F51FF',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },

    menuText: {
        color: '#000000',
        fontSize: 13,
        fontWeight: '600',
        paddingTop: 5,
        textAlign: 'center',
    }
})