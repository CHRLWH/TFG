import React, { useState } from 'react';
import { TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button, Platform, PermissionsAndroid } from 'react-native';
import { launchCamera } from 'react-native-image-picker'
import Icon from 'react-native-vector-icons/Ionicons';

const imageCamera = require('../../../assets/camera.png');
const onPress = () => {
    Alert.alert('You tapped the button!');
  };
const NavbarCamera= () => {
  const [image, setImage] = useState(null)

  const camera = async () => {
    let options = {
      mediaType: 'camera',
      maxWidth: 300,
      maxHeigth: 550,
    };
    let isCameraPermitted = await requestCameraPermission()
    if(isCameraPermitted || Platform.Version > 13) {
      launchCamera(options, response => {
        if (response.errorCode) {
          alert(response.errorMessage)
        } else {
          setImage(response?.assets)
        }
      })
    }
  }
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try{
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        )
        console.log("Platform Version:", Platform.Version)
        console.log("Camera Permission Status:", granted)
        return granted === PermissionsAndroid.RESULTS.GRANTED
      } catch (err) {
        return granted === PermissionsAndroid.RESULTS.GRANTED
      }
    } else {
      return granted === PermissionsAndroid.RESULTS.GRANTED
    }
  }
  return (
    <SafeAreaView style={styles.contenedor}>
    <TouchableOpacity onPress={() => camera()}>
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