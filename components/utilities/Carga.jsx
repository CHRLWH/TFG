import React from 'react';
import { Image , ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './comun/Header';
import Footer from './comun/Footer';
import {NavigationContainer} from '@react-navigation/native';

const image = require('../assets/img/Logo_CIMPA.png');

const Carga = () => {
  return (
    <NavigationContainer>
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
      <Image
        style={styles.separator}
        source={image}
      />
      <ActivityIndicator size="small" color="#E50026" />
      </View>
      <Footer />
    </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  separator: {
    marginBottom: 50,
  },
});

export default Carga;