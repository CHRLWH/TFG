import React,  { useState } from 'react';
import { TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button } from 'react-native';
import { useNavigation, useState } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const onPress = () => {
    Alert.alert('You tapped the button!');
  };
const TitleScreen = ({}) => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{marginTop:"50%",backgroundColor: "black", flex: 0, flexDirection:"column", alignItems: "center", justifyContent:"center"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="exit" size={40} color="#FFF">Inicio</Icon>
        </TouchableOpacity> 
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   
});

export default TitleScreen;
