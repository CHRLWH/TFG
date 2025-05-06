import React from 'react';
import { TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const NavbarGallery= ({}) => {
  const navigation = useNavigation(); // Obtener la navegación en un componente hijo

  return (
    <SafeAreaView style={styles.contenedor}>
    <TouchableOpacity onPress={() => navigation.navigate('GaleriaPrueba')}>
    <Icon name="image" size={40} color="#FFF" />
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

export default NavbarGallery;
