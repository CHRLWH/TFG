import React from 'react';
import { SafeAreaView, Image, StyleSheet, View, Pressable, Text } from 'react-native';
import NavbarHome from './navbarHome/NavbarHome';
import NavbarCamera from './navbarCam/NavBarCamera';
import NavbarGallery from './navbarGallery/NavbarGallery';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  withRepeat,
} from 'react-native-reanimated';
const imagenEjemplo = require('../../assets/logoCimpa.png');

const Navbar = ({ width }) => {
  const pressed = useSharedValue(false);
  let contadorTaps = useSharedValue(0);
  
  const tap = Gesture.Tap()
    .onBegin(() => {
      contadorTaps.value++;
      pressed.value = contadorTaps.value % 2 !== 0; // Alterna entre true y false.
    });
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(pressed.value ? 1.5 : 1)}],
  }));

  const offset = useSharedValue(width / 2 - 160);

  const animatedStyleNavBar = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  React.useEffect(() => {
    offset.value = withRepeat(
      withTiming(-offset.value, { duration: 1750 }),
      -1,
      true
    );
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[animatedStyleNavBar]}>
      <View style={styles.contenedorNavegacion}>
        <GestureDetector gesture={tap}>
          <Animated.View style={[animatedStyles]}>
            <NavbarHome/>
          </Animated.View>
        </GestureDetector>
          <NavbarCamera/>
        <NavbarGallery/>
      </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    contenedorNavegacion: {
        alignSelf:'center',
        width: '90%',
        height: 100,
        backgroundColor:'#D32F2F',
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        marginLeft:'4%',
        marginRight:'4%',
        boxShadow: '0px 10px rgb(243, 175, 175)',
    },
    container: {
      marginLeft: '3%',
      marginRight: '3%',
      marginBottom: '17%'
    },
});

export default Navbar;
