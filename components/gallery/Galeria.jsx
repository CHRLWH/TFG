import React, { useState, useEffect } from 'react';
import { ScrollView, SafeAreaView, Image, Text, StyleSheet, View, FlatList, Pressable, Dimensions } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn } from 'react-native-reanimated';
import Navbar from '../navbar/Navbar';

const GaleriaPrueba = () => {
  const [images, setImages] = useState([]); // Estado para almacenar las imágenes
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  const { width } = Dimensions.get('window');
  const imageSize = (width - 60) / 2;

  // Petición fetch para obtener las imágenes e información
  useEffect(() => {
    fetch('http://192.168.1.62:3000/get', {
      method: 'GET',
    })
      .then((resp) => resp.json())
      .then((imageData) => {
        console.log('Datos recibidos:', imageData);
        // Almacenar los datos en el estado images
        setImages(imageData);
      })
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

  // Filtrar los datos según el texto de búsqueda
  const filteredImages = images.filter(item => 
    item.image && item.image.toLowerCase().includes(search.toLowerCase()) // Asegurarse de que item.name esté definido
  );

  const renderImage = (item, index) => {
    const testImage = `http://192.168.1.62:3000/imgs/${item.image}`;
    return (
      <Pressable
        key={item.id}
        onPress={() => navigation.navigate('ViewImage', { image: item })} // Navegar a la pantalla de ViewImage con la imagen
      >
        <Animated.Image
          entering={FadeIn.delay(100 * index).duration(800)}
          source={{ uri: testImage }}
          style={[styles.image, { width: imageSize, height: imageSize }]}
          resizeMode="cover"
        />
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>GALERIA</Text>

      <ScrollView contentContainerStyle={styles.gallery}>
        <Text style={styles.segundoTitulo}>Fotos</Text>
        <View style={styles.row}>
          {filteredImages.map((item, index) => renderImage(item, index))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Navbar />
      </View>
    </SafeAreaView>
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
    fontSize:40,
    flexDirection:'row',
    marginTop:'25%',
    marginLeft:'10%',
    fontWeight:'bold',
    color:"red",
    marginTop:'10%',
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