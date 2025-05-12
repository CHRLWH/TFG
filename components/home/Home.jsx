import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, Image, ActivityIndicator, ScrollView } from 'react-native';
import Navbar from '../navbar/Navbar';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const PaginaPrincipal = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [latestImage, setLatestImage] = useState(null);

  useEffect(() => {
    // Obtener imágenes desde el backend
    fetch('http://192.168.1.62:3000/get')
      .then((resp) => resp.json())
      .then((imageData) => {
        console.log('Imágenes recibidas:', imageData);
        setImages(imageData);
        setLatestImage(imageData.length > 0 ? imageData[imageData.length - 1] : null); // Obtener la última imagen
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al obtener imágenes:', error);
        setLoading(false);
      });
  }, []);

  return (
    <SafeAreaProvider style={{ width: '100%', height: '100%', flex: 1 }}>
      <View style={styles.curvedTop} />
      <SafeAreaView style={{ flexDirection: 'column', alignItems: 'center' }}>
        <Text style={styles.welcomeText}>Bienveni@!</Text>
        <View style={styles.iconRow}>
          <View style={styles.iconWithText}>
            <Icon name="images" size={40} color="rgb(255, 254, 249)" />
            <Text style={styles.iconText}> x {images.length}</Text>
          </View>
          <View style={styles.userIcon}>
            <Icon name="person-circle" size={40} color="rgb(255, 255, 255)" />
          </View>
        </View>
        <Text style={styles.sectionTitle}>Foto más reciente</Text>

        {/* Pantalla de carga */}
        {loading ? (
          <ActivityIndicator size="large" color="#D32F2F" />
        ) : latestImage ? (
          <Image
            source={{ uri: `http://192.168.1.62:3000/imgs/${latestImage.image}` }}
            style={styles.latestImage}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.noImageText}>No hay imágenes disponibles.</Text>
        )}

        {/* Carrusel de imágenes */}
        <Text style={styles.carouselTitle}>Otras imágenes</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
          {images.map((item, index) => (
            <Image
              key={index}
              source={{ uri: `http://192.168.1.62:3000/imgs/${item.image}` }}
              style={styles.carouselImage}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
      </SafeAreaView>
      <View style={styles.footer}>
        <Navbar />
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  curvedTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '23%',
    backgroundColor: '#D32F2F',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    boxShadow: '0px 10px rgb(243, 175, 175)',

  },
  welcomeText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 30,    
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
    marginVertical: 20,
  },
  iconWithText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  userIcon: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    boxShadow: '0px 10px rgb(252, 210, 73)',
    marginBottom: 20,
    marginTop: 20,
  },
  latestImage: {
    width: 300,
    height: 200,
    borderRadius: 15,
    marginVertical: 10,
  },
  noImageText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
  carouselTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3a4251',
    marginTop: 20,
    boxShadow: '0px 10px rgb(252, 210, 73)',
    marginBottom: 10,

  },
  carousel: {
    flexDirection: 'row',
    marginTop: 10,
  },
  carouselImage: {
    width: 120,
    height: 100,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
});

export default PaginaPrincipal;
