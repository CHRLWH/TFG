import React, {useState}from 'react';
import { ImageBackground,  ScrollView,  TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button, FlatList } from 'react-native';
import Navbar from '../navbar/Navbar';
import 'react-native-gesture-handler';
import ClassImage from '../classes/ClassImage';
import Animated , {withSpring } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';
import { Marquee } from '@animatereactnative/marquee';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');


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
    <SafeAreaProvider style={{width: '100%',height: '100%', zIndex:1, flex: 1}}>
    <View style={styles.curvedTop} />
      <SafeAreaView style={{flexDirection: 'Column'}}>
        <View style={styles.foto}>
        <Text style={{flexDirection:"row", justifyContent:"flex-start", fontSize:30,lineHeight: 84,
    fontWeight: 'bold', color:'white'}}>Bienveni@!</Text>
        </View>
        <Text></Text>
        <View style={styles.texto}>
        <View
  style={{
    position: 'absolute',
    top: -100, // o el valor exacto donde lo quieres
    left: -20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  }}
>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Icon name="star" size={40} color="rgb(255, 254, 249)" />
    <Text style={{ fontWeight: 'bold', color: '#fff' }}> x 30</Text>
  </View>
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Icon name="person-circle" size={40} color="rgb(175, 2, 2)" />
  </View>
</View>

        <Text style={{fontSize: 30, fontWeight:'bold', marginTop: '30%', textShadowColor: 'rgb(19, 18, 18)'}}>Tus fotos</Text>
        <Marquee style={{marginTop:"10%",zIndex:0}}spacing={20} speed={1}>
          <Image source={imageScroll} style={{borderBottomLeftRadius: 20,borderTopRightRadius: 20, boxShadow: '10px 10px rgb(249, 248, 141)',maxWidth: 150, maxHeight: 150}}></Image>
        </Marquee>
        {/** ZONA DONDE ESTÉN LOS DATOS DEL USUARIO COMO UNA ESPECIE DE ESTADISTICAS DE LAS FOTOS QUE LLEVA HECHAS Y DEMÁS */}
        
        </View>
          
        
      
      </SafeAreaView>
      <View style={styles.footer}>
      <Navbar/>
      </View>
      
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    flex: 1,
  },
  curvedTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '20%',
    backgroundColor: '#e75b52',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
    zIndex: -1,
  },
  headerArea: {
    height: '20%',
    flexDirection: 'column',
  },
  foto: {
    marginTop: 40,
    marginHorizontal: 3,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 30,
    lineHeight: 84,
    fontWeight: 'bold',
    color: 'white',
  },
  texto: {
    marginLeft: '10%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  userIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20%',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgb(19, 18, 18)',
  },
  marquee: {
    marginTop: '9%',
  },
  scrollImage: {
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    width: 150,
    height: 150,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  curvedTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '23%',
    backgroundColor: '#D32F2F',
    borderBottomLeftRadius: '30%',
    borderBottomRightRadius: '30%',
    overflow: 'hidden',
    zIndex: -1, // Empuja al fondo
    boxShadow: '0px 10px rgb(243, 175, 175)',
  },
});

export default PaginaPrincipal;
