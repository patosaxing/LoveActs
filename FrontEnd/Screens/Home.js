//Import Statements
import React from 'react';
import { Text, View, 
    Button, SafeAreaView,
    StyleSheet } from 'react-native';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import MenuButtons from '../Components/MenuButtons';
import ContactMenu from '../Components/ContactMenu';

function Home(){
    return(
        <View style = {styles.container}>
            <SafeAreaView style = {{ height: '100%' }}>
                <Header />
                <SearchBar />
                <MenuButtons />
                <ContactMenu />
            </SafeAreaView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D3D3D3',
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 15
    }
})