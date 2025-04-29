import React, {useState}from 'react';
import { ImageBackground,  ScrollView,  TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button, FlatList } from 'react-native';
import Logo from '../logoComponent/Logo';
import Navbar from '../navbar/Navbar';
import 'react-native-gesture-handler';
import ClassImage from '../classes/ClassImage';
import Animated , {withSpring } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import { Marquee } from '@animatereactnative/marquee';
import Icon from 'react-native-vector-icons/Ionicons';


import { TextInput } from 'react-native-web';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from 'react-native/Libraries/NewAppScreen';
const PaginaPrincipal = () => {
 // const image = require('../../assets/fondoPagPrincipal.png');
  const imageScroll = require('../../assets/arbolEjemplo.jpg');

  const translateX = useSharedValue(0);

  const width = useSharedValue(100);
  const handlePress = () => {
    translateX.value = withSpring(translateX.value + 50);
  };

  return (
    <ImageBackground /*source={image}*/ resizeMode="cover" style={styles.image}>
    <SafeAreaProvider style={{width: '100%',height: '100%'}}>
      
      <SafeAreaView style={{height: 500, flexDirection: 'Column'}}>
        <View style={styles.foto}>
        <Text style={{flexDirection:"row", justifyContent:"flex-start", fontSize:30,lineHeight: 84,
    fontWeight: 'bold', color:'white'}}>Bienveni@!</Text>
        </View>
        <Text></Text>
        <View style={styles.texto}>
        <View style= {{flexDirection: 'row', flexBasis:'auto', justifyContent: "space-between"}}>
          <View style= {{flex: 0, flexDirection: 'row', alignItems:'center',flexBasis:'auto', justifyContent:'center'}}>
            /** Hacer esto un boton que lleve a CoinPage.jsx
             */
              <Icon style= {{position: 'static', }} name="star" size={40} color="rgb(255, 254, 249)"/>
              <Text style={{fontWeight: 'bold'}}> x 30</Text>
            </View>
            <View style= {{flex: 0, flexDirection: 'row', alignItems:'center',flexBasis:'auto', justifyContent:'center', marginRight: 30}}>
              /** Hacer esto un boton que lleve a UserPage.jsx */
              <Icon name="person-circle" size={40} color="rgb(175, 2, 2)"/>
            </View>
          </View>
        <Text style={{fontSize: 30, fontWeight:'bold', marginTop: "45%", textShadowColor: 'rgb(108, 108, 108)'}}>Fotos populares!</Text>
        <Marquee style={{marginTop:"9%"}}spacing={20} speed={1}>
          <Image source={imageScroll} style={{borderBottomLeftRadius: 20,borderTopRightRadius: 20, boxShadow: '10px 10px rgb(249, 248, 141)',maxWidth: 150, maxHeight: 150}}></Image>
        </Marquee>
          <Text style={{}}> </Text>
            <Animated.View style={[styles.box, { transform: [{ translateX }] }]} />
            <Button onPress = {handlePress} title="Click me" />
            <Text style={{fontSize: 30, fontWeight:'bold'}}>Hola</Text>
        <Marquee spacing={20} speed={1}>
          
        </Marquee>
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
      <Navbar/>
      </View>
      
    </SafeAreaProvider>
    </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  NavBar: {
    marginTop: "100%",
    marginBottom: 0,
  },
  box: {
    marginTop:'0%',
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
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
  texto: {
    marginTop:'30%',
    marginLeft: '10%',
    flexDirection: "column",
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
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: "100em",
  },
});

export default PaginaPrincipal;
