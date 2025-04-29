import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Pressable, Text } from 'react-native';

const FotoPerfilUsuario = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contenedorFoto}>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    contenedorFoto: {
        width: 200,
        height: 200,
        borderColor: 'black',
    }
});

export default FotoPerfilUsuario;
