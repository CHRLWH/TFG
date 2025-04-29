import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 Mi Aplicación</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    padding: 15,
    alignItems: 'center',
    position:"absolute",
    bottom:0
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});
export default Footer;
