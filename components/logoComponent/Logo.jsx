import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Pressable, Text } from 'react-native';

const image = require('../../assets/logoCimpa.png');

const Logo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Image source={image}
       style={{width: 200, height: 200}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
});

export default Logo;
