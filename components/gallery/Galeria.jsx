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
    fetch('http://192.168.1.55:3000/get', {
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
    const testImage = `http://192.168.1.55:3000/imgs/${item.image}`;
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

      <View style={{ paddingLeft: 40, flexDirection: 'column', justifyContent: 'center' }}>
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
            borderWidth: 2,
            borderColor: '#3a4251',
          }}
          inputStyle={{
            fontSize: 16,
            color: '#3a4251',
          }}
          placeholderTextColor="#aaa"
        />
        <View
          style={{
            height: 4,
            backgroundColor: 'red',
            marginVertical: 10,
            width: 250,
            marginTop: 20,
            marginLeft: 20,
          }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.gallery}>
        <Text style={styles.segundoTitulo}>Lugares</Text>
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
