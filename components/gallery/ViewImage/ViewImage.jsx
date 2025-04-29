import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Pressable, Text } from 'react-native';
import Logo from '../logoComponent/Logo';
import ButtonBasics from '../buttons/ButtonBasics';
import TextInputExample from '../utilities/TextInputExample';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FotoPerfilUsuario from '../userPhoto/FotoPerfilUsuario';
import Galeria from '../gallery/Galeria';
import Navbar from '../navbar/Navbar';
import { TextInput } from 'react-native-web';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ViewImage = () => {
  return (
    <SafeAreaProvider style={{width: '100%',height: '100%'}}>
     /** Pantalla con crud de imagen con el nombre, valor y fecha + hora que se hizo ver transiciones con reanimated*/
    </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  
});

export default ViewImage;
