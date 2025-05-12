import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Pressable, Text } from 'react-native';
import NavbarHome from './navbarHome/NavbarHome';
import NavbarCamera from './navbarCam/NavBarCamera';
import NavbarGallery from './navbarGallery/NavbarGallery';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
const imagenEjemplo = require('../../assets/logoCimpa.png');

const Navbar = ({ width }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contenedorNavegacion}>
            <NavbarHome/>
          <NavbarCamera/>
        <NavbarGallery/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    contenedorNavegacion: {
        alignSelf:'center',
        width: '90%',
        height: 100,
        backgroundColor:'#D32F2F',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginLeft:'4%',
        marginRight:'4%',
        boxShadow: '0px 10px rgb(243, 175, 175)',
    },
    container: {
      marginLeft: '3%',
      marginRight: '3%',
      marginBottom: '17%'
    },
});

export default Navbar;
