import React, { useState } from 'react';
import { TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button, Platform, PermissionsAndroid } from 'react-native';
import { launchCamera } from 'react-native-image-picker'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const imageCamera = require('../../../assets/camera.png');
const onPress = () => {
    Alert.alert('You tapped the button!');
  };
const NavbarCamera= () => {
   const navigation = useNavigation(); 
 
  return (
    <SafeAreaView style={styles.contenedor}>
    <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
      <Icon name="add-circle" size={40} color="#FFF" />
    </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    imagen: {
        justifyContent: 'center',
        width:55,
        height:55,
        marginLeft:20,
    }
});

export default NavbarCamera;