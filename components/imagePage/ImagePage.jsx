javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImagePage = () => {
  return (
    <View style={styles.container}>
      <Text>Image Page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImagePage;
