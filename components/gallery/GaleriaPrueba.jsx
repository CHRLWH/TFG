import {ImageBackground,  ScrollView,  TouchableOpacity ,SafeAreaView, Image, StyleSheet, View, Pressable, Text, Button, FlatList  } from 'react-native';
import Navbar from '../navbar/Navbar';
import Animated, { FadeIn, withSpring  } from 'react-native-reanimated';
import React, {useState}from 'react';
import Logo from '../logoComponent/Logo';
import 'react-native-gesture-handler';
import ClassImage from '../classes/ClassImage';
import { useSharedValue } from 'react-native-reanimated';
import { Marquee } from '@animatereactnative/marquee';
import Icon from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';

const GaleriaPrueba = () => {
    const [search, setSearch] = useState('');

  const { width } = Dimensions.get('window');
  const imageSize = (width - 60) / 2; 
  const images = [
    { id: '1', src: require('../../backend/imgs/Marquesina.jpg') },
    { id: '2', src: require('../../backend/imgs/Marquesina2.jpg') },
    { id: '3', src: require('../../backend/imgs/papelera.jpg') },
    { id: '4', src: require('../../backend/imgs/Papelera2.jpg') },
  ];

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>GALERIA</Text>
        <SearchBar style={styles.searchBar}
      placeholder="Type Here..."
      onChangeText={setSearch}
      value={search}
    />
      <ScrollView contentContainerStyle={styles.gallery}>
      <Text style={styles.segundoTitulo}>Lugares</Text>
        <View style={styles.row}>
          {images.map((img, index) => (
            <Animated.Image
              key={img.id}
              entering={FadeIn.delay(100 * index).duration(800)}
              source={img.src}
              style={[styles.image, { width: imageSize, height: imageSize }]}
              resizeMode="cover"
            />
          ))}
        </View>
        <Text style={styles.segundoTitulo}>Fauna</Text>
        <View style={styles.row}>
          {images.map((img, index) => (
            <Animated.Image
              key={img.id}
              entering={FadeIn.delay(100 * index).duration(800)}
              source={img.src}
              style={[styles.image, { width: imageSize, height: imageSize }]}
              resizeMode="cover"
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Navbar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    ImageBackground:"blue"
  },
  searchBar: {
    marginTop:'10%'
  },
  gallery: {
    paddingHorizontal: 25,
    paddingTop: 20,
    paddingBottom: 100, // para dejar espacio al navbar fijo
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    borderRadius: 15,
    marginBottom: 10,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  titulo:{
    fontSize:30,
    flexDirection:'row',
    marginTop:'25%',
    marginLeft:'10%',
    fontWeight:'bold',
    color:"red"
  },
  segundoTitulo:{
    fontSize:30,
    flexDirection:'row',
    marginLeft:'10%',
    marginBottom:'5%',
    fontWeight:'bold'
  },
});

export default GaleriaPrueba;
