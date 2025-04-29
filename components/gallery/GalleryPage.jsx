import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Pressable, Text } from 'react-native';
import Logo from '../logoComponent/Logo';
import ButtonBasics from '../buttons/ButtonBasics';
import TextInputExample from '../utilities/TextInputExample';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FotoPerfilUsuario from '../userPage/userPhoto/FotoPerfilUsuario';
import Galeria from '../gallery/Galeria';
import Navbar from '../navbar/Navbar';


import { TextInput } from 'react-native-web';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const GalleryPage = () => {
  return (
    <SafeAreaProvider style={{width: '100%',height: '100%'}}>
      <SafeAreaView style={{height: 500, flexDirection: 'Column'}}>
        <View style={styles.foto}>
        <Galeria/>
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
      <Navbar/>
      </View>
    </SafeAreaProvider>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },

  footer: {
    width: "100%",
    position:"absolute",
    bottom:0
  },

  foto: {
    marginTop: 40,
    marginLeft: 3,
    marginRight:3,
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",

  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cajasDeTexto: {
    marginTop: 3,
    width: 2,
  }
});

export default GalleryPage;
