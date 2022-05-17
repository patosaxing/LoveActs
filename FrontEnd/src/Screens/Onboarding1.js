
import React from 'react';
import { StyleSheet, Image,
            Text, View } from 'react-native';
import Swiper from 'react-native-swiper';

const Onboarding1 = () => {
  return (
    <Swiper style = {styles.wrapper} showsButtons = {true}>
        <View style = {styles.container}>
          <Image style = {styles.imageStyle}
                  source = {require('../Images/Rocket.png')} />
          <Text style = {styles.text}>Reach</Text>
        </View>
        <View style = {styles.slide1}>
        <Image style = {styles.imageStyle1}
                  source = {require('../Images/Love.png')} />
          <Text style = {styles.text}>Love</Text>
        </View>
        <View style = {styles.slide2}>
        <Image style = {styles.imageStyle1}
                  source = {require('../Images/Reach.png')} />
          <Text style = {styles.text}>Impact</Text>
        </View>
        <View style = {styles.slide3}>
          <Image style = {styles.imageStyle1}
                  source = {require('../Images/getStarted.png')} />
          <Text style = {styles.text}>Get Started</Text>
        </View>
      </Swiper>
  )
}

export default Onboarding1

const styles = StyleSheet.create({
    wrapper: {},
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
        },

        slide1: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
        },
        slide2:{
            flex: 1,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
        },

        slide3:{
            flex: 1,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
        },

        text: {
            color: '#000000',
            fontSize: 30,
            fontWeight: 'bold'
        },

        imageStyle: {
            height: 400,
            width: 300
        },

        imageStyle1: {
            height: 400,
            width: 400
        }
})