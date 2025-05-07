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
import { useNavigation } from '@react-navigation/native';

const GaleriaPrueba = () => {
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

  const { width } = Dimensions.get('window');
  const imageSize = (width - 60) / 2; 
  const images = [
    { id: '1',  name: 'Marquesina', valor: '1',descripcion: 'Marquesina en medio de una calle',fechaHora:"20/12/21 15:20",src: require('../../backend/imgs/Marquesina.jpg') },
    { id: '2',  name: 'Marquesina2', valor: '1',descripcion: 'Marquesina en medio de una calle',fechaHora:"20/12/21 15:20",src: require('../../backend/imgs/Marquesina2.jpg') },
    { id: '3',  name: 'papelera', valor: '1',descripcion: 'Marquesina en medio de una calle',fechaHora:"20/12/21 15:20",src: require('../../backend/imgs/papelera.jpg') },
    { id: '4',  name: 'pap', valor: '1',descripcion: 'Marquesina en medio de una calle',fechaHora:"20/12/21 15:20",src: require('../../backend/imgs/Papelera2.jpg') },
  ];

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>GALERIA</Text>
        <View style={{paddingLeft:40,flexDirection:'column', justifyContent:'center'}}>
        <SearchBar
          placeholder="Search..."
          onChangeText={setSearch}
          value={search}
          lightTheme
          round
          containerStyle={{
            width: 300,
            marginTop: '5%',
            backgroundColor: '#f1eae4',
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 8,
            padding: 0,
            
          }}
          inputContainerStyle={{
            backgroundColor: 'white',
            borderRadius: 8,
            height: 40,
            borderWidth: 2, // Aumentado de 1 a 2
            borderColor: '#3a4251'
          }}
          inputStyle={{
            fontSize: 16,
            color: '#3a4251'
          }}
          placeholderTextColor="#aaa"
        />
         <View
    style={{
      height: 4,
      backgroundColor: 'red',
      marginVertical: 10,
      width:250,
      marginTop:20,
      marginLeft:20
      
    }}
  />
        </View>
   
  <View>
      <ScrollView contentContainerStyle={styles.gallery}>
      <Text style={styles.segundoTitulo}>Lugares</Text>
      <View style={styles.row}>
      {images.map((img, index) => (
        <Pressable
          key={img.name}
          onPress={() => navigation.navigate('ViewImage', { image: img })}
        >
          <Animated.Image
            entering={FadeIn.delay(100 * index).duration(800)}
            source={img.src}
            style={[styles.image, { width: imageSize, height: imageSize }]}
            resizeMode="cover"
          />
        </Pressable>
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
      </View>
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
    marginTop:'10%',
  },
  gallery: {
    paddingHorizontal: 25,
    paddingTop: 50,
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
