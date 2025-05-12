import React, { useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

const TitleScreen = () => {
  const navigation = useNavigation();
  const backgroundColorValue = useSharedValue(0);

  useEffect(() => {
    backgroundColorValue.value = withTiming(1, { duration: 4000 }, () => {
      backgroundColorValue.value = withTiming(0, { duration: 4000 });
    });
  }, []);

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = backgroundColorValue.value === 1 ? '#f3afaf' : '#f1eae4';
    return { backgroundColor };
  });

  return (
    <SafeAreaView style={[styles.container, animatedBackgroundStyle]}>
      <Image source={require('../../assets/logoCimpa.png')} style={{ width: 200, height: 200 }} />
      <Text style={styles.title}>ImgAnalyzer</Text>
      <Pressable style={styles.boton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.botonTexto}>Entrar</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3a4251',
    textAlign: 'center',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: "#D32F2F",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 40,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    borderBottomColor: 'black',
    width: 300,
    height: 70,
  },
  botonTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default TitleScreen;
