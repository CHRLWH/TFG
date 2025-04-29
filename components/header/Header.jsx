import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ImgAnalyzer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#496C9A',
    padding: 20,
    alignItems: 'center',
    height: 90,
  },
  title: {
    marginTop:17,
    alignContent: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Monoton',
  },
});

export default Header;
